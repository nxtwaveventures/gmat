import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const difficultyParam = searchParams.get('difficulty');

        let whereClause = {};
        if (difficultyParam) {
            const difficulty = difficultyParam.toUpperCase();
            if (difficulty === 'EASY' || difficulty === 'MEDIUM' || difficulty === 'HARD') {
                whereClause = { difficulty };
            }
        }

        const words = await prisma.vocabularyWord.findMany({
            where: whereClause,
            orderBy: {
                word: 'asc'
            }
        });

        return NextResponse.json(words);
    } catch (error) {
        console.error('Error fetching vocabulary words:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vocabulary words' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { wordId, mastered } = body;

        const updatedWord = await prisma.vocabularyWord.update({
            where: {
                id: wordId
            },
            data: {
                mastered
            }
        });

        return NextResponse.json(updatedWord);
    } catch (error) {
        console.error('Error updating vocabulary word:', error);
        return NextResponse.json(
            { error: 'Failed to update vocabulary word' },
            { status: 500 }
        );
    }
} 