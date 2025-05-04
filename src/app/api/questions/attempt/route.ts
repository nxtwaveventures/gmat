import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        // Get request data
        const data = await request.json();
        const { questionId, userAnswer, isCorrect, timeTaken, mode } = data;

        // Validate required fields
        if (!questionId || !userAnswer || typeof isCorrect !== 'boolean' || !timeTaken || !mode) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // For demo purposes, use a default demo user
        const demoUser = await prisma.user.findFirst({
            where: { email: 'demo@example.com' },
        });

        if (!demoUser) {
            return NextResponse.json(
                { error: 'Demo user not found, please seed the database first' },
                { status: 404 }
            );
        }

        // Record the question attempt
        const questionAttempt = await prisma.questionAttempt.create({
            data: {
                userId: demoUser.id,
                questionId,
                userAnswer,
                isCorrect,
                timeTaken,
                mode,
            },
        });

        // Update user stats
        await prisma.userStats.upsert({
            where: { userId: demoUser.id },
            update: {
                totalQuestionsAttempted: { increment: 1 },
                correctAnswers: isCorrect ? { increment: 1 } : undefined,
                lastStudyDate: new Date(),
                studyTimeMinutes: { increment: Math.ceil(timeTaken / 60) },
            },
            create: {
                userId: demoUser.id,
                totalQuestionsAttempted: 1,
                correctAnswers: isCorrect ? 1 : 0,
                lastStudyDate: new Date(),
                studyTimeMinutes: Math.ceil(timeTaken / 60),
                gmatScore: 500, // Starting score
                streakDays: 0,
            },
        });

        // Get the question to determine exam type for score update
        const question = await prisma.question.findUnique({
            where: { id: questionId },
        });

        // Update GMAT score if it's a GMAT question
        if (question?.examType === 'GMAT') {
            // Calculate a simple scaled score based on difficulty
            // This is a simplified approach - actual GMAT uses a more complex algorithm
            let scoreIncrement = 0;

            if (isCorrect) {
                switch (question.difficulty) {
                    case 'EASY':
                        scoreIncrement = 1;
                        break;
                    case 'MEDIUM':
                        scoreIncrement = 2;
                        break;
                    case 'HARD':
                        scoreIncrement = 3;
                        break;
                    case 'VERY_HARD':
                        scoreIncrement = 4;
                        break;
                }
            }

            if (scoreIncrement > 0) {
                await prisma.userStats.update({
                    where: { userId: demoUser.id },
                    data: {
                        gmatScore: { increment: scoreIncrement },
                    },
                });
            }
        }

        return NextResponse.json({ success: true, questionAttempt });
    } catch (error) {
        console.error('Error recording question attempt:', error);
        return NextResponse.json(
            { error: 'Failed to record question attempt' },
            { status: 500 }
        );
    }
} 