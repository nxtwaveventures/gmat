import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const examType = searchParams.get('examType');
        const section = searchParams.get('section');
        const difficulty = searchParams.get('difficulty');

        if (!examType || !section) {
            return NextResponse.json(
                { error: 'Missing required parameters: examType and section are required' },
                { status: 400 }
            );
        }

        // Build the query filter
        const filter: any = {
            examType,
            section,
        };

        // Add difficulty to the filter if provided
        if (difficulty) {
            filter.difficulty = difficulty;
        }

        // Fetch questions from the database
        const questions = await prisma.question.findMany({
            where: filter,
            select: {
                id: true,
                content: true,
                options: true,
                solution: true,
                explanation: true,
                difficulty: true,
            },
            orderBy: {
                id: 'asc',
            },
            take: 5, // Limit the number of questions to avoid overwhelming the UI
        });

        return NextResponse.json({ questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch questions' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, questionId, userAnswer, isCorrect, timeTaken, mode } = body;

        // Validate required fields
        if (!userId || !questionId || !userAnswer || isCorrect === undefined || !timeTaken || !mode) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Record the question attempt
        const attempt = await prisma.questionAttempt.create({
            data: {
                userId,
                questionId,
                userAnswer,
                isCorrect,
                timeTaken,
                mode,
            },
        });

        // Update user stats
        await prisma.userStats.upsert({
            where: { userId },
            update: {
                totalQuestionsAttempted: { increment: 1 },
                correctAnswers: isCorrect ? { increment: 1 } : undefined,
                lastStudyDate: new Date(),
            },
            create: {
                userId,
                totalQuestionsAttempted: 1,
                correctAnswers: isCorrect ? 1 : 0,
                lastStudyDate: new Date(),
            },
        });

        return NextResponse.json({ success: true, attempt });
    } catch (error) {
        console.error('Error recording question attempt:', error);
        return NextResponse.json(
            { error: 'Failed to record question attempt' },
            { status: 500 }
        );
    }
} 