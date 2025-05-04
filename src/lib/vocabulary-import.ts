import { VocabularyWord, analyzeWordDifficulty, CATEGORIES } from '@/data/vocabulary';
import { parse } from 'csv-parse/sync';

export interface WordRelationship {
    type: 'synonym' | 'antonym' | 'related' | 'derived';
    targetWord: string;
    strength: number; // 0-1 indicating relationship strength
}

export interface ImportedWord extends VocabularyWord {
    relationships?: WordRelationship[];
}

export class VocabularyImporter {
    private words: ImportedWord[] = [];
    private relationships: Map<string, WordRelationship[]> = new Map();

    async importFromCSV(csvContent: string): Promise<ImportedWord[]> {
        const records = parse(csvContent, {
            columns: true,
            skip_empty_lines: true
        });

        return this.processRecords(records);
    }

    async importFromJSON(jsonContent: string): Promise<ImportedWord[]> {
        const records = JSON.parse(jsonContent);
        return this.processRecords(records);
    }

    private processRecords(records: any[]): ImportedWord[] {
        this.words = records.map(record => {
            const word: ImportedWord = {
                word: record.word,
                definition: record.definition,
                example: record.example,
                difficulty: record.difficulty || analyzeWordDifficulty(record.word, record.definition),
                category: record.category || this.detectCategory(record.word, record.definition),
                story: record.story,
                etymology: record.etymology,
                imageUrl: record.imageUrl,
                synonyms: record.synonyms ? this.parseArray(record.synonyms) : undefined,
                antonyms: record.antonyms ? this.parseArray(record.antonyms) : undefined,
                usageNotes: record.usageNotes,
                relationships: []
            };

            // Process relationships
            if (record.relationships) {
                word.relationships = this.processRelationships(record.relationships, word.word);
            }

            return word;
        });

        return this.words;
    }

    private detectCategory(word: string, definition: string): string {
        // Simple category detection based on keywords
        const definitionLower = definition.toLowerCase();

        if (definitionLower.includes('business') || definitionLower.includes('economy') ||
            definitionLower.includes('finance') || definitionLower.includes('market')) {
            return CATEGORIES.BUSINESS;
        }

        if (definitionLower.includes('science') || definitionLower.includes('research') ||
            definitionLower.includes('study') || definitionLower.includes('theory')) {
            return CATEGORIES.ACADEMIC;
        }

        if (definitionLower.includes('disease') || definitionLower.includes('medical') ||
            definitionLower.includes('health') || definitionLower.includes('treatment')) {
            return CATEGORIES.MEDICAL;
        }

        // Default to common category
        return CATEGORIES.COMMON;
    }

    private parseArray(value: string | string[]): string[] {
        if (Array.isArray(value)) return value;
        return value.split(',').map(item => item.trim());
    }

    private processRelationships(relationships: any, sourceWord: string): WordRelationship[] {
        const processed: WordRelationship[] = [];

        if (typeof relationships === 'string') {
            // Handle comma-separated string
            const items = this.parseArray(relationships);
            items.forEach(item => {
                processed.push({
                    type: 'related',
                    targetWord: item,
                    strength: 0.5
                });
            });
        } else if (Array.isArray(relationships)) {
            // Handle array of relationship objects
            relationships.forEach(rel => {
                processed.push({
                    type: rel.type || 'related',
                    targetWord: rel.targetWord,
                    strength: rel.strength || 0.5
                });
            });
        }

        return processed;
    }

    getWords(): ImportedWord[] {
        return this.words;
    }

    getRelationships(): Map<string, WordRelationship[]> {
        return this.relationships;
    }

    getWordCount(): number {
        return this.words.length;
    }

    getCategoryCounts(): Record<string, number> {
        return this.words.reduce((acc, word) => {
            acc[word.category] = (acc[word.category] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }

    getDifficultyCounts(): Record<string, number> {
        return this.words.reduce((acc, word) => {
            acc[word.difficulty] = (acc[word.difficulty] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }
} 