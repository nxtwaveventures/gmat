"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VocabularyImport } from '@/components/VocabularyImport';

interface VocabularyWord {
    id: string;
    word: string;
    definition: string;
    example: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    mastered: boolean;
}

export default function VocabularyPage() {
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [stats, setStats] = useState({
        totalWords: 0,
        masteredWords: 0,
        easyWords: 0,
        mediumWords: 0,
        hardWords: 0
    });

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch('/api/vocabulary');
                if (!response.ok) {
                    throw new Error('Failed to fetch vocabulary words');
                }
                const data = await response.json();
                setWords(data);

                // Calculate statistics
                const stats = {
                    totalWords: data.length,
                    masteredWords: data.filter((word: VocabularyWord) => word.mastered).length,
                    easyWords: data.filter((word: VocabularyWord) => word.difficulty === "EASY").length,
                    mediumWords: data.filter((word: VocabularyWord) => word.difficulty === "MEDIUM").length,
                    hardWords: data.filter((word: VocabularyWord) => word.difficulty === "HARD").length
                };
                setStats(stats);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Vocabulary Builder</h1>

            {/* Add the import component */}
            <div className="mb-8">
                <VocabularyImport />
            </div>

            {/* Learning Methods Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Learning Methods</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Multiple Ways to Build Your Vocabulary
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Choose the learning method that works best for you
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                    {/* Flashcards */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600">
                            <CardTitle className="text-white text-center">Flashcards</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-600 mb-6 text-center">
                                Traditional flashcard system with spaced repetition to optimize your learning
                            </p>
                            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 shadow-md hover:shadow-lg">
                                <Link href="/gmat/study/vocabulary/flashcards">
                                    Start Flashcards
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Word Lists */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600">
                            <CardTitle className="text-white text-center">Word Lists</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-600 mb-6 text-center">
                                Organized lists of high-frequency words categorized by difficulty level
                            </p>
                            <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 shadow-md hover:shadow-lg">
                                <Link href="/gmat/study/vocabulary/lists">
                                    View Word Lists
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Word Games */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-gradient-to-r from-cyan-600 to-teal-600">
                            <CardTitle className="text-white text-center">Word Games</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-600 mb-6 text-center">
                                Fun interactive games to reinforce your vocabulary knowledge
                            </p>
                            <Button asChild className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 shadow-md hover:shadow-lg">
                                <Link href="/gmat/study/vocabulary/games">
                                    Play Games
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Flashcard Demo */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Smart Flashcard System
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-gray-500">
                                Our intelligent flashcard system uses spaced repetition to help you learn more efficiently. The system tracks your performance and shows you words at optimal intervals to maximize retention.
                            </p>
                            <div className="mt-8 sm:flex">
                                <div className="rounded-md shadow">
                                    <Link href="/gmat/study/vocabulary/flashcards">
                                        <Button className="w-full">Try Flashcards Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="perspective-1000 mx-auto w-80 h-56 relative">
                                <div className="flashcard-example w-full h-full rounded-lg shadow-xl bg-white p-6 transform transition-transform duration-700 border border-gray-200">
                                    <div className="h-full flex flex-col justify-between">
                                        <div className="text-sm text-gray-500">Tap to flip</div>
                                        <div className="text-center my-auto">
                                            <h3 className="text-2xl font-bold text-gray-900">Ubiquitous</h3>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-green-600">GRE High Frequency</span>
                                            <span className="text-gray-500">1/200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Word Lists Preview */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Focus on What Matters</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Targeted Word Lists
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        We've organized high-frequency words into manageable lists
                    </p>
                </div>

                <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>GRE High Frequency</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">200 words most commonly tested on the GRE</p>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Difficulty</dt>
                                    <dd className="mt-1 text-sm text-gray-900">Advanced</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Words</dt>
                                    <dd className="mt-1 text-sm text-gray-900">200</dd>
                                </div>
                                <div className="sm:col-span-2 mt-2">
                                    <Link href="/gmat/study/vocabulary/lists/gre-high-frequency" className="text-green-600 hover:text-green-500 text-sm">
                                        View list →
                                    </Link>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>GMAT Vocabulary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">Essential words for GMAT sentence correction and reading</p>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Difficulty</dt>
                                    <dd className="mt-1 text-sm text-gray-900">Intermediate</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Words</dt>
                                    <dd className="mt-1 text-sm text-gray-900">150</dd>
                                </div>
                                <div className="sm:col-span-2 mt-2">
                                    <Link href="/gmat/study/vocabulary/lists/gmat-vocabulary" className="text-green-600 hover:text-green-500 text-sm">
                                        View list →
                                    </Link>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Advanced GRE Words</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">Challenging vocabulary for top GRE scorers</p>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Difficulty</dt>
                                    <dd className="mt-1 text-sm text-gray-900">Very Advanced</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Words</dt>
                                    <dd className="mt-1 text-sm text-gray-900">300</dd>
                                </div>
                                <div className="sm:col-span-2 mt-2">
                                    <Link href="/gmat/study/vocabulary/lists/advanced-gre" className="text-green-600 hover:text-green-500 text-sm">
                                        View list →
                                    </Link>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gray-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Track Your Progress</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                            Vocabulary Dashboard
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Monitor your learning progress with detailed analytics
                        </p>
                    </div>

                    {loading ? (
                        <div className="mt-12 text-center">
                            <p className="text-gray-500">Loading statistics...</p>
                        </div>
                    ) : error ? (
                        <div className="mt-12 text-center">
                            <p className="text-red-500">{error}</p>
                        </div>
                    ) : (
                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Total Words</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-gray-900">{stats.totalWords}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Mastered Words</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-green-600">{stats.masteredWords}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {Math.round((stats.masteredWords / stats.totalWords) * 100)}% complete
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Difficulty Distribution</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Easy</span>
                                            <span className="text-sm font-medium">{stats.easyWords}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Medium</span>
                                            <span className="text-sm font-medium">{stats.mediumWords}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Hard</span>
                                            <span className="text-sm font-medium">{stats.hardWords}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="mt-12 flex justify-center">
                        <Link href="/gmat/study/vocabulary/dashboard">
                            <Button variant="outline" size="lg">View Detailed Progress</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">"The beginning of wisdom is the definition of terms."</span>
                        <span className="block text-teal-200 text-xl mt-2">- Socrates</span>
                    </h2>
                </div>
            </div>
        </div>
    );
} 