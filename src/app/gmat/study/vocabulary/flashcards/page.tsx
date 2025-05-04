"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Image, BookOpen, Lightbulb, ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

interface VocabularyWord {
    id: string;
    word: string;
    definition: string;
    example: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    mastered: boolean;
    imageUrl?: string;
    story?: string;
    etymology?: string;
}

export default function FlashcardsPage() {
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [showStory, setShowStory] = useState(false);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch('/api/vocabulary');
                if (!response.ok) {
                    throw new Error('Failed to fetch vocabulary words');
                }
                const data = await response.json();
                setWords(data);
                setProgress((data.filter((word: VocabularyWord) => word.mastered).length / data.length) * 100);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

    const handleMastered = async () => {
        if (!words[currentIndex]) return;

        try {
            const response = await fetch('/api/vocabulary/mastered', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ wordId: words[currentIndex].id }),
            });

            if (!response.ok) {
                throw new Error('Failed to update word status');
            }

            const updatedWords = [...words];
            updatedWords[currentIndex] = { ...updatedWords[currentIndex], mastered: true };
            setWords(updatedWords);
            setProgress((updatedWords.filter(word => word.mastered).length / updatedWords.length) * 100);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'EASY':
                return 'bg-green-100 text-green-800';
            case 'MEDIUM':
                return 'bg-yellow-100 text-yellow-800';
            case 'HARD':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getCardGradient = (difficulty: string) => {
        switch (difficulty) {
            case 'EASY':
                return 'from-green-50 to-green-100';
            case 'MEDIUM':
                return 'from-yellow-50 to-yellow-100';
            case 'HARD':
                return 'from-red-50 to-red-100';
            default:
                return 'from-gray-50 to-gray-100';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading flashcards...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    const currentWord = words[currentIndex];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar with animation */}
                <div className="mb-8 animate-fade-in">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2 transition-all duration-500 ease-in-out" />
                </div>

                {/* Flashcard with enhanced animations */}
                <div className="relative animate-slide-up">
                    <div
                        className={`perspective-1000 w-full h-[500px] cursor-pointer transition-all duration-700 transform-style-3d hover:scale-[1.02] ${isFlipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-xl bg-gradient-to-br ${getCardGradient(currentWord.difficulty)} p-8 transition-all duration-300 hover:shadow-2xl`}>
                            <div className="h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentWord.difficulty)} transition-all duration-300 hover:scale-105`}>
                                        {currentWord.difficulty}
                                    </span>
                                    <span className="text-gray-500 text-sm animate-fade-in">
                                        {currentIndex + 1} / {words.length}
                                    </span>
                                </div>

                                <div className="flex-grow flex flex-col items-center justify-center text-center">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">{currentWord.word}</h2>
                                    {currentWord.imageUrl && (
                                        <div className="w-48 h-48 mb-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                                            <img
                                                src={currentWord.imageUrl}
                                                alt={currentWord.word}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    )}
                                    <p className="text-gray-600 text-lg animate-fade-in">{currentWord.definition}</p>
                                </div>

                                <div className="mt-6 flex justify-center space-x-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowStory(!showStory);
                                        }}
                                        className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    >
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        {showStory ? 'Hide Story' : 'Show Story'}
                                    </Button>
                                    {currentWord.etymology && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Add etymology modal or tooltip here
                                            }}
                                            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                                        >
                                            <Lightbulb className="w-4 h-4 mr-2" />
                                            Etymology
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl bg-gradient-to-br ${getCardGradient(currentWord.difficulty)} p-8 transition-all duration-300 hover:shadow-2xl`}>
                            <div className="h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentWord.difficulty)} transition-all duration-300 hover:scale-105`}>
                                        {currentWord.difficulty}
                                    </span>
                                    <span className="text-gray-500 text-sm animate-fade-in">
                                        {currentIndex + 1} / {words.length}
                                    </span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 animate-slide-up">Example Usage</h3>
                                    <p className="text-gray-600 text-lg mb-6 animate-fade-in">{currentWord.example}</p>

                                    {showStory && currentWord.story && (
                                        <div className="mt-6 animate-slide-up">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Memory Story</h3>
                                            <p className="text-gray-600 text-lg">{currentWord.story}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 flex justify-center space-x-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowStory(!showStory);
                                        }}
                                        className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    >
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        {showStory ? 'Hide Story' : 'Show Story'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation and Mastery Controls with animations */}
                <div className="mt-8 flex justify-between items-center animate-fade-in">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsFlipped(false);
                            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : words.length - 1));
                        }}
                        disabled={currentIndex === 0}
                        className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>

                    <div className="flex space-x-4">
                        <Button
                            variant="outline"
                            className="text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                            onClick={() => {
                                setIsFlipped(false);
                                setCurrentIndex((prev) => (prev + 1) % words.length);
                            }}
                        >
                            <XCircle className="w-4 h-4 mr-2" />
                            Skip
                        </Button>
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
                            onClick={() => {
                                handleMastered();
                                setIsFlipped(false);
                                setCurrentIndex((prev) => (prev + 1) % words.length);
                            }}
                        >
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Mastered
                        </Button>
                    </div>

                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsFlipped(false);
                            setCurrentIndex((prev) => (prev + 1) % words.length);
                        }}
                        className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }

                .animate-slide-up {
                    animation: slideUp 0.5s ease-out;
                }

                .perspective-1000 {
                    perspective: 1000px;
                }

                .transform-style-3d {
                    transform-style: preserve-3d;
                }

                .backface-hidden {
                    backface-visibility: hidden;
                }

                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
} 