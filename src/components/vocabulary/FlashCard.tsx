'use client';

import { useState, useEffect } from 'react';

// Define the vocabulary word type
type VocabularyWord = {
    id: string;
    word: string;
    definition: string;
    example?: string;
    partOfSpeech?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'VERY_HARD';
    synonyms?: string;
    antonyms?: string;
};

interface FlashCardProps {
    word: VocabularyWord;
    onNext: () => void;
    onMastery: (wordId: string, level: 'NEW' | 'LEARNING' | 'REVIEWING' | 'MASTERED') => void;
    totalWords: number;
    currentIndex: number;
}

export default function FlashCard({
    word,
    onNext,
    onMastery,
    totalWords,
    currentIndex,
}: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
        setShowButtons(false);
    }, [word]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        if (!isFlipped) {
            // Show mastery buttons after flipping to definition
            setShowButtons(true);
        }
    };

    const handleMastery = (level: 'NEW' | 'LEARNING' | 'REVIEWING' | 'MASTERED') => {
        onMastery(word.id, level);
        onNext();
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'EASY':
                return 'bg-green-100 text-green-800';
            case 'MEDIUM':
                return 'bg-yellow-100 text-yellow-800';
            case 'HARD':
                return 'bg-orange-100 text-orange-800';
            case 'VERY_HARD':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="mx-auto my-8">
            <div className="perspective-1000 w-full max-w-md mx-auto">
                <div
                    className={`relative h-80 w-full cursor-pointer transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                        }`}
                    onClick={handleFlip}
                >
                    {/* Front of card (Word) */}
                    <div
                        className={`absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between ${isFlipped ? 'hidden' : ''
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
                                    word.difficulty
                                )}`}
                            >
                                {word.difficulty}
                            </span>
                            <span className="text-sm text-gray-500">
                                {currentIndex + 1}/{totalWords}
                            </span>
                        </div>

                        <div className="flex-grow flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-gray-900">{word.word}</h2>
                        </div>

                        {word.partOfSpeech && (
                            <div className="text-sm text-center text-gray-500">
                                {word.partOfSpeech}
                            </div>
                        )}

                        <div className="text-sm text-center text-gray-400">Tap to flip</div>
                    </div>

                    {/* Back of card (Definition) */}
                    <div
                        className={`absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg p-6 rotate-y-180 ${!isFlipped ? 'hidden' : ''
                            }`}
                    >
                        <div className="h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">{word.word}</h3>
                                {word.partOfSpeech && (
                                    <span className="text-sm italic text-gray-600">{word.partOfSpeech}</span>
                                )}
                            </div>

                            <div className="flex-grow">
                                <div className="mb-3">
                                    <p className="text-gray-900 font-medium">Definition:</p>
                                    <p className="text-gray-700">{word.definition}</p>
                                </div>

                                {word.example && (
                                    <div className="mb-3">
                                        <p className="text-gray-900 font-medium">Example:</p>
                                        <p className="text-gray-700 italic">{word.example}</p>
                                    </div>
                                )}

                                {word.synonyms && (
                                    <div className="mb-3">
                                        <p className="text-gray-900 font-medium">Synonyms:</p>
                                        <p className="text-gray-700">{word.synonyms}</p>
                                    </div>
                                )}

                                {word.antonyms && (
                                    <div className="mb-3">
                                        <p className="text-gray-900 font-medium">Antonyms:</p>
                                        <p className="text-gray-700">{word.antonyms}</p>
                                    </div>
                                )}
                            </div>

                            {showButtons && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-700 mb-2">How well did you know this word?</p>
                                    <div className="flex justify-between space-x-2">
                                        <button
                                            onClick={() => handleMastery('NEW')}
                                            className="flex-1 py-2 px-2 bg-red-100 text-red-800 rounded-md text-sm hover:bg-red-200 transition-colors"
                                        >
                                            Don't Know
                                        </button>
                                        <button
                                            onClick={() => handleMastery('LEARNING')}
                                            className="flex-1 py-2 px-2 bg-yellow-100 text-yellow-800 rounded-md text-sm hover:bg-yellow-200 transition-colors"
                                        >
                                            Somewhat
                                        </button>
                                        <button
                                            onClick={() => handleMastery('REVIEWING')}
                                            className="flex-1 py-2 px-2 bg-blue-100 text-blue-800 rounded-md text-sm hover:bg-blue-200 transition-colors"
                                        >
                                            Almost
                                        </button>
                                        <button
                                            onClick={() => handleMastery('MASTERED')}
                                            className="flex-1 py-2 px-2 bg-green-100 text-green-800 rounded-md text-sm hover:bg-green-200 transition-colors"
                                        >
                                            Know It
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 