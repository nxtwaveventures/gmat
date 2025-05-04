'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the question type
type QuestionOption = {
    id: string;
    text: string;
};

type Question = {
    id: string;
    content: string;
    options: QuestionOption[];
    solution: string;
    explanation: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'VERY_HARD';
    section: string;
    examType: 'GMAT' | 'GRE';
};

interface QuestionCardProps {
    question: Question;
    onNext: () => void;
    onSave: (savedQuestion: Question) => void;
    totalQuestions: number;
    currentIndex: number;
}

export default function QuestionCard({
    question,
    onNext,
    onSave,
    totalQuestions,
    currentIndex,
}: QuestionCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [timeSpent, setTimeSpent] = useState(0);
    const [timerStarted, setTimerStarted] = useState(true);

    // Start the timer when component mounts
    useState(() => {
        let interval: NodeJS.Timeout;
        if (timerStarted) {
            interval = setInterval(() => {
                setTimeSpent((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    });

    const handleOptionSelect = (optionId: string) => {
        if (showExplanation) return; // Prevent changing answer after showing explanation
        setSelectedOption(optionId);
    };

    const handleCheckAnswer = () => {
        setShowExplanation(true);
        setTimerStarted(false);
    };

    const handleNext = () => {
        setSelectedOption(null);
        setShowExplanation(false);
        setTimeSpent(0);
        setTimerStarted(true);
        onNext();
    };

    const handleSave = () => {
        onSave(question);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const getBadgeColor = (difficulty: string) => {
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

    const isCorrect = selectedOption === question.solution;

    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                {/* Question header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(question.difficulty)}`}
                        >
                            {question.difficulty}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {question.section}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {question.examType}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        <span>Question {currentIndex + 1}/{totalQuestions}</span>
                        <span className="ml-4">Time: {formatTime(timeSpent)}</span>
                    </div>
                </div>

                {/* Question content */}
                <div className="mb-6">
                    <p className="text-gray-900 text-lg">{question.content}</p>
                </div>

                {/* Options */}
                <div className="space-y-2">
                    {question.options.map((option) => (
                        <div
                            key={option.id}
                            className={`p-4 border rounded-md cursor-pointer transition-colors ${showExplanation
                                    ? option.id === question.solution
                                        ? 'bg-green-50 border-green-500'
                                        : selectedOption === option.id
                                            ? 'bg-red-50 border-red-500'
                                            : 'border-gray-200'
                                    : selectedOption === option.id
                                        ? 'bg-indigo-50 border-indigo-500'
                                        : 'border-gray-200 hover:border-indigo-200'
                                }`}
                            onClick={() => handleOptionSelect(option.id)}
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className={`h-5 w-5 rounded-full border ${selectedOption === option.id
                                                ? 'border-indigo-500 bg-indigo-500'
                                                : 'border-gray-300'
                                            } flex items-center justify-center`}
                                    >
                                        {selectedOption === option.id && (
                                            <div className="h-2 w-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-900">{option.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explanation */}
                {showExplanation && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {isCorrect ? (
                                <span className="text-green-600">Correct!</span>
                            ) : (
                                <span className="text-red-600">Incorrect</span>
                            )}
                        </h3>
                        <div className="text-sm text-gray-700">
                            <p className="mb-2">
                                <span className="font-semibold">Explanation:</span> {question.explanation}
                            </p>
                        </div>
                    </div>
                )}

                {/* Action buttons */}
                <div className="mt-6 flex justify-between">
                    <div>
                        {!showExplanation && (
                            <button
                                onClick={handleSave}
                                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <svg
                                    className="-ml-0.5 mr-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                                Save Question
                            </button>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        {!showExplanation ? (
                            <button
                                disabled={!selectedOption}
                                onClick={handleCheckAnswer}
                                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${selectedOption
                                        ? 'bg-indigo-600 hover:bg-indigo-700'
                                        : 'bg-indigo-400 cursor-not-allowed'
                                    }`}
                            >
                                Check Answer
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Next Question
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 