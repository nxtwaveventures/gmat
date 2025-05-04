import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Define types for better code readability
type ExamType = 'GMAT' | 'GRE';
type Section = 'QUANTITATIVE' | 'VERBAL' | 'INTEGRATED' | 'ANALYTICAL';
type Difficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'VERY_HARD';

export async function GET() {
    try {
        // Simple questions to ensure we have some data
        const questions = [
            {
                examType: 'GMAT' as ExamType,
                section: 'QUANTITATIVE' as Section,
                difficulty: 'EASY' as Difficulty,
                content: 'If x = 3 and y = 5, what is the value of x² + y²?',
                options: [
                    { id: 'A', text: '8' },
                    { id: 'B', text: '25' },
                    { id: 'C', text: '34' },
                    { id: 'D', text: '64' },
                    { id: 'E', text: '16' },
                ],
                solution: 'C',
                explanation: 'x² + y² = 3² + 5² = 9 + 25 = 34.',
            },
            {
                examType: 'GMAT' as ExamType,
                section: 'QUANTITATIVE' as Section,
                difficulty: 'MEDIUM' as Difficulty,
                content: 'If a car travels 120 miles in 2 hours, what is its average speed in miles per hour?',
                options: [
                    { id: 'A', text: '30 mph' },
                    { id: 'B', text: '60 mph' },
                    { id: 'C', text: '90 mph' },
                    { id: 'D', text: '120 mph' },
                    { id: 'E', text: '240 mph' },
                ],
                solution: 'B',
                explanation: 'Average speed = distance ÷ time = 120 miles ÷ 2 hours = 60 miles per hour.',
            },
            {
                examType: 'GMAT' as ExamType,
                section: 'QUANTITATIVE' as Section,
                difficulty: 'HARD' as Difficulty,
                content: 'If the sum of three consecutive integers is 51, what is the product of the smallest and largest of these integers?',
                options: [
                    { id: 'A', text: '221' },
                    { id: 'B', text: '272' },
                    { id: 'C', text: '289' },
                    { id: 'D', text: '306' },
                    { id: 'E', text: '288' },
                ],
                solution: 'E',
                explanation: 'Let the three integers be x, x+1, and x+2. Then x + (x+1) + (x+2) = 51 → 3x + 3 = 51 → 3x = 48 → x = 16. So the integers are 16, 17, and 18. The product of smallest and largest is 16 × 18 = 288.',
            },
            {
                examType: 'GMAT' as ExamType,
                section: 'QUANTITATIVE' as Section,
                difficulty: 'VERY_HARD' as Difficulty,
                content: 'The equations x² + bx + c = 0 and x² + cx + b = 0 have exactly one common root. If this common root is -1, what is the value of b + c?',
                options: [
                    { id: 'A', text: '-1' },
                    { id: 'B', text: '0' },
                    { id: 'C', text: '1' },
                    { id: 'D', text: '2' },
                    { id: 'E', text: '3' },
                ],
                solution: 'D',
                explanation: 'Substituting x = -1 into both equations: 1 - b + c = 0 and 1 - c + b = 0. Adding these equations: 2 = 0, which means b + c = 2.',
            },
        ];

        // Create questions in the database
        for (const question of questions) {
            await prisma.question.create({
                data: {
                    examType: question.examType,
                    section: question.section,
                    difficulty: question.difficulty,
                    content: question.content,
                    options: JSON.parse(JSON.stringify(question.options)),
                    solution: question.solution,
                    explanation: question.explanation,
                },
            });
        }

        return NextResponse.json({
            success: true,
            message: `Successfully seeded ${questions.length} GMAT Quantitative questions`
        });
    } catch (error) {
        console.error('Error seeding GMAT Quantitative questions:', error);
        return NextResponse.json(
            { error: 'Failed to seed GMAT Quantitative questions' },
            { status: 500 }
        );
    }
} 