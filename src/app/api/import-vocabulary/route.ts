import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VocabularyImporter } from '@/lib/vocabulary-import';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const fileType = formData.get('type') as string;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        const content = await file.text();
        const importer = new VocabularyImporter();

        let words;
        if (fileType === 'csv') {
            words = await importer.importFromCSV(content);
        } else if (fileType === 'json') {
            words = await importer.importFromJSON(content);
        } else {
            return NextResponse.json(
                { error: 'Unsupported file type' },
                { status: 400 }
            );
        }

        // Process words in batches
        const BATCH_SIZE = 100;
        let processedCount = 0;

        for (let i = 0; i < words.length; i += BATCH_SIZE) {
            const batch = words.slice(i, i + BATCH_SIZE);
            await prisma.vocabularyWord.createMany({
                data: batch.map(word => ({
                    ...word,
                    synonyms: word.synonyms ? JSON.stringify(word.synonyms) : null,
                    antonyms: word.antonyms ? JSON.stringify(word.antonyms) : null,
                    relationships: word.relationships ? JSON.stringify(word.relationships) : null
                }))
            });
            processedCount += batch.length;
        }

        return NextResponse.json({
            message: 'Vocabulary words imported successfully',
            totalWords: words.length,
            processedCount: processedCount,
            categoryCounts: importer.getCategoryCounts(),
            difficultyCounts: importer.getDifficultyCounts()
        });
    } catch (error) {
        console.error('Error importing vocabulary words:', error);
        return NextResponse.json(
            { error: 'Failed to import vocabulary words' },
            { status: 500 }
        );
    }
} 