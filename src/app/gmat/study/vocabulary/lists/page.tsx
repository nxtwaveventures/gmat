"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VocabularyWord {
    id: string;
    word: string;
    definition: string;
    example: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    mastered: boolean;
}

export default function WordListsPage() {
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDifficulty, setSelectedDifficulty] = useState<"EASY" | "MEDIUM" | "HARD" | "ALL">("ALL");

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const response = await fetch("/api/vocabulary");
            const data = await response.json();
            setWords(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching words:", error);
            setLoading(false);
        }
    };

    const filteredWords = words.filter(
        (word) => selectedDifficulty === "ALL" || word.difficulty === selectedDifficulty
    );

    const handleMastered = async (wordId: string) => {
        try {
            const response = await fetch(`/api/vocabulary/${wordId}/mastered`, {
                method: "POST",
            });

            if (response.ok) {
                setWords((prev) =>
                    prev.map((word) =>
                        word.id === wordId ? { ...word, mastered: true } : word
                    )
                );
            }
        } catch (error) {
            console.error("Error marking word as mastered:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900">Loading word lists...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Vocabulary Word Lists</h1>
                    <p className="mt-2 text-gray-600">Browse and learn words by difficulty level</p>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <Button
                        variant={selectedDifficulty === "ALL" ? "default" : "outline"}
                        onClick={() => setSelectedDifficulty("ALL")}
                    >
                        All Words
                    </Button>
                    <Button
                        variant={selectedDifficulty === "EASY" ? "default" : "outline"}
                        onClick={() => setSelectedDifficulty("EASY")}
                    >
                        Easy
                    </Button>
                    <Button
                        variant={selectedDifficulty === "MEDIUM" ? "default" : "outline"}
                        onClick={() => setSelectedDifficulty("MEDIUM")}
                    >
                        Medium
                    </Button>
                    <Button
                        variant={selectedDifficulty === "HARD" ? "default" : "outline"}
                        onClick={() => setSelectedDifficulty("HARD")}
                    >
                        Hard
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredWords.map((word) => (
                        <Card key={word.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">{word.word}</CardTitle>
                                <div className="text-sm text-gray-500">
                                    Difficulty: {word.difficulty}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">{word.definition}</p>
                                <p className="text-sm text-gray-500 italic mb-4">
                                    "{word.example}"
                                </p>
                                <Button
                                    onClick={() => handleMastered(word.id)}
                                    variant={word.mastered ? "secondary" : "default"}
                                    className="w-full"
                                >
                                    {word.mastered ? "Mastered" : "Mark as Mastered"}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredWords.length === 0 && (
                    <div className="text-center mt-8">
                        <p className="text-gray-600">No words found for the selected difficulty level.</p>
                    </div>
                )}
            </div>
        </div>
    );
} 