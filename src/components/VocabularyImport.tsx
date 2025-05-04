'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

export function VocabularyImport() {
    const [isImporting, setIsImporting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [importStats, setImportStats] = useState<{
        totalWords: number;
        processedCount: number;
        categoryCounts: Record<string, number>;
        difficultyCounts: Record<string, number>;
    } | null>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const fileType = file.name.endsWith('.csv') ? 'csv' : 'json';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', fileType);

        setIsImporting(true);
        setProgress(0);

        try {
            const response = await fetch('/api/import-vocabulary', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Import failed');
            }

            const data = await response.json();
            setImportStats(data);
            toast.success(`Successfully imported ${data.processedCount} words`);
        } catch (error) {
            console.error('Import error:', error);
            toast.error('Failed to import vocabulary words');
        } finally {
            setIsImporting(false);
            setProgress(100);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Import Vocabulary</CardTitle>
                <CardDescription>
                    Upload a CSV or JSON file containing vocabulary words
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">CSV or JSON files</p>
                            </div>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".csv,.json"
                                onChange={handleFileUpload}
                                disabled={isImporting}
                            />
                        </label>
                    </div>

                    {isImporting && (
                        <div className="space-y-2">
                            <Progress value={progress} />
                            <p className="text-sm text-gray-500 text-center">
                                Importing vocabulary words...
                            </p>
                        </div>
                    )}

                    {importStats && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold mb-2">Categories</h3>
                                    <ul className="space-y-1">
                                        {Object.entries(importStats.categoryCounts).map(([category, count]) => (
                                            <li key={category} className="text-sm">
                                                {category}: {count} words
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold mb-2">Difficulty Levels</h3>
                                    <ul className="space-y-1">
                                        {Object.entries(importStats.difficultyCounts).map(([difficulty, count]) => (
                                            <li key={difficulty} className="text-sm">
                                                {difficulty}: {count} words
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
} 