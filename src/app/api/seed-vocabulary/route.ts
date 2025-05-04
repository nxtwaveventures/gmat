import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { vocabularyWords } from '@/data/vocabulary';

const BATCH_SIZE = 100; // Process words in batches of 100

export async function GET() {
    try {
        // Delete existing vocabulary words
        await prisma.vocabularyWord.deleteMany();

        // Process words in batches
        const totalWords = vocabularyWords.length;
        let processedCount = 0;

        for (let i = 0; i < totalWords; i += BATCH_SIZE) {
            const batch = vocabularyWords.slice(i, i + BATCH_SIZE);
            await prisma.vocabularyWord.createMany({
                data: batch.map(word => ({
                    ...word,
                    synonyms: word.synonyms ? JSON.stringify(word.synonyms) : null,
                    antonyms: word.antonyms ? JSON.stringify(word.antonyms) : null
                }))
            });
            processedCount += batch.length;
        }

        return NextResponse.json({
            message: 'Vocabulary words seeded successfully',
            totalWords: totalWords,
            processedCount: processedCount,
            categories: Object.keys(vocabularyWords.reduce((acc, word) => {
                acc[word.category] = true;
                return acc;
            }, {} as Record<string, boolean>))
        });
    } catch (error) {
        console.error('Error seeding vocabulary words:', error);
        return NextResponse.json(
            { error: 'Failed to seed vocabulary words' },
            { status: 500 }
        );
    }
} 