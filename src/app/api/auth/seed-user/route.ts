import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
    try {
        // Create a demo user with password hashing
        const hashedPassword = await hash('password123', 10);

        const user = await prisma.user.upsert({
            where: { email: 'demo@example.com' },
            update: {},
            create: {
                email: 'demo@example.com',
                name: 'Demo User',
                password: hashedPassword,
            },
        });

        // Create user stats for tracking progress
        await prisma.userStats.upsert({
            where: { userId: user.id },
            update: {},
            create: {
                userId: user.id,
                totalQuestionsAttempted: 0,
                correctAnswers: 0,
                gmatScore: 500, // Starting score
                streakDays: 0,
                lastStudyDate: new Date(),
                studyTimeMinutes: 0,
            },
        });

        return NextResponse.json({
            success: true,
            message: `Successfully created demo user: ${user.email}`
        });
    } catch (error) {
        console.error('Error creating demo user:', error);
        return NextResponse.json(
            { error: 'Failed to create demo user' },
            { status: 500 }
        );
    }
} 