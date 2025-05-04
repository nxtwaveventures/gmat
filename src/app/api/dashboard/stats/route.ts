import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Define types for the vocabulary progress and attempts
interface VocabularyProgressItem {
    mastery: 'NEW' | 'LEARNING' | 'REVIEWING' | 'MASTERED';
}

interface QuestionAttemptItem {
    question: {
        section: string;
        examType: string;
    };
    isCorrect: boolean;
    createdAt: Date;
}

interface VocabularyProgressWithWord {
    word: {
        word: string;
    };
    mastery: 'NEW' | 'LEARNING' | 'REVIEWING' | 'MASTERED';
    lastReviewed: Date;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // Fetch user information
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
            },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Fetch user stats
        const userStats = await prisma.userStats.findUnique({
            where: { userId },
        });

        // Calculate accuracy
        const accuracy = userStats && userStats.totalQuestionsAttempted > 0
            ? (userStats.correctAnswers / userStats.totalQuestionsAttempted) * 100
            : 0;

        // Get vocabulary progress
        const vocabularyProgress = await prisma.vocabularyProgress.findMany({
            where: { userId },
            select: {
                mastery: true,
            },
        });

        const vocabularyStats = {
            mastered: vocabularyProgress.filter((p: VocabularyProgressItem) => p.mastery === 'MASTERED').length,
            learning: vocabularyProgress.filter((p: VocabularyProgressItem) => p.mastery === 'LEARNING').length,
            reviewing: vocabularyProgress.filter((p: VocabularyProgressItem) => p.mastery === 'REVIEWING').length,
            new: vocabularyProgress.filter((p: VocabularyProgressItem) => p.mastery === 'NEW').length,
            totalWords: vocabularyProgress.length,
        };

        // Get recent question attempts
        const recentAttempts = await prisma.questionAttempt.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 20,
            include: {
                question: {
                    select: {
                        content: true,
                        section: true,
                        examType: true,
                    },
                },
            },
        });

        // Calculate performance by section
        const sectionPerformance = await prisma.$queryRaw`
      SELECT 
        q.section, 
        q.examType,
        COUNT(*) as totalAttempts,
        SUM(CASE WHEN qa.isCorrect THEN 1 ELSE 0 END) as correctAttempts
      FROM "QuestionAttempt" qa
      JOIN "Question" q ON qa.questionId = q.id
      WHERE qa.userId = ${userId}
      GROUP BY q.section, q.examType
    `;

        // Calculate streak days
        let streakDays = 0;
        if (userStats?.lastStudyDate) {
            const currentDate = new Date();
            const lastStudyDate = new Date(userStats.lastStudyDate);

            // Check if user studied today
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const lastStudyDay = new Date(lastStudyDate);
            lastStudyDay.setHours(0, 0, 0, 0);

            // If studied today, count streak
            if (lastStudyDay.getTime() === today.getTime()) {
                streakDays = userStats.streakDays || 1;
            } else {
                // Check if studied yesterday
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                yesterday.setHours(0, 0, 0, 0);

                if (lastStudyDay.getTime() === yesterday.getTime()) {
                    streakDays = userStats.streakDays || 1;
                } else {
                    streakDays = 0;
                }
            }
        }

        // Determine weak and strong areas
        const weakAreas = [];
        const strongAreas = [];

        for (const section of sectionPerformance as any[]) {
            const sectionAccuracy = section.totalAttempts > 0
                ? (section.correctAttempts / section.totalAttempts) * 100
                : 0;

            const areaInfo = {
                name: section.section,
                examType: section.examType,
                accuracy: Math.round(sectionAccuracy),
                totalAttempts: section.totalAttempts,
            };

            if (sectionAccuracy < 75) {
                weakAreas.push(areaInfo);
            } else if (sectionAccuracy > 85) {
                strongAreas.push(areaInfo);
            }
        }

        // Sort weak areas by accuracy (ascending) and strong areas by accuracy (descending)
        weakAreas.sort((a, b) => a.accuracy - b.accuracy);
        strongAreas.sort((a, b) => b.accuracy - a.accuracy);

        // Get recent activity
        const recentActivity = await Promise.all([
            // Question attempts
            prisma.questionAttempt.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: 5,
                include: {
                    question: {
                        select: {
                            section: true,
                            examType: true,
                        },
                    },
                },
            }),
            // Vocabulary progress
            prisma.vocabularyProgress.findMany({
                where: { userId },
                orderBy: { lastReviewed: 'desc' },
                take: 5,
                include: {
                    word: {
                        select: {
                            word: true,
                        },
                    },
                },
            }),
        ]);

        // Format recent activity
        const formattedActivity = [
            ...recentActivity[0].map((attempt: QuestionAttemptItem) => ({
                type: 'Question',
                examType: attempt.question.examType,
                section: attempt.question.section,
                isCorrect: attempt.isCorrect,
                timestamp: attempt.createdAt,
            })),
            ...recentActivity[1].map((progress: VocabularyProgressWithWord) => ({
                type: 'Vocabulary',
                word: progress.word.word,
                mastery: progress.mastery,
                timestamp: progress.lastReviewed,
            })),
        ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .slice(0, 10);

        // Compile dashboard data
        const dashboardData = {
            user,
            stats: {
                ...userStats,
                accuracy: Math.round(accuracy * 10) / 10, // Round to 1 decimal place
                streakDays,
            },
            vocabularyStats,
            sectionPerformance,
            weakAreas: weakAreas.slice(0, 3), // Top 3 weak areas
            strongAreas: strongAreas.slice(0, 3), // Top 3 strong areas
            recentActivity: formattedActivity,
        };

        return NextResponse.json(dashboardData);
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return NextResponse.json(
            { error: 'Failed to fetch dashboard statistics' },
            { status: 500 }
        );
    }
} 