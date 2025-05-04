'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define the Difficulty enum manually since we can't import it directly in client components
enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
    VERY_HARD = 'VERY_HARD'
}

interface Question {
    id: string;
    content: string;
    options: {
        id: string;
        text: string;
    }[];
    solution: string;
    explanation: string;
    difficulty: Difficulty;
}

export default function QuantitativeStudyPage() {
    const router = useRouter();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>(Difficulty.EASY);
    const [timer, setTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);

    // Fetch questions based on current difficulty
    useEffect(() => {
        const fetchQuestions = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/questions?examType=GMAT&section=QUANTITATIVE&difficulty=${currentDifficulty}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }

                const data = await response.json();
                setQuestions(data.questions);
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setIsCorrect(null);
            } catch (error) {
                console.error('Error fetching questions:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQuestions();
    }, [currentDifficulty]);

    // Start timer when a new question is loaded
    useEffect(() => {
        if (questions.length > 0 && !isAnswerSubmitted) {
            // Clear any existing timer
            if (timerInterval) {
                clearInterval(timerInterval);
            }

            // Reset timer
            setTimer(0);

            // Start new timer
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);

            setTimerInterval(interval);
        }

        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [currentQuestionIndex, questions, isAnswerSubmitted]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleAnswerSelect = (answerId: string) => {
        if (!isAnswerSubmitted) {
            setSelectedAnswer(answerId);
        }
    };

    const handleSubmit = async () => {
        if (!selectedAnswer || isAnswerSubmitted) return;

        // Stop timer
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }

        const currentQuestion = questions[currentQuestionIndex];
        const correct = selectedAnswer === currentQuestion.solution;

        setIsCorrect(correct);
        setIsAnswerSubmitted(true);
        setTotalAnswered(prev => prev + 1);

        if (correct) {
            setTotalCorrect(prev => prev + 1);
        }

        // Record the answer
        try {
            await fetch('/api/questions/attempt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    questionId: currentQuestion.id,
                    userAnswer: selectedAnswer,
                    isCorrect: correct,
                    timeTaken: timer,
                    mode: 'PRACTICE',
                }),
            });
        } catch (error) {
            console.error('Error recording answer:', error);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            // Adjust difficulty based on performance
            if (isCorrect) {
                // Increase difficulty if getting correct answers
                switch (currentDifficulty) {
                    case Difficulty.EASY:
                        setCurrentDifficulty(Difficulty.MEDIUM);
                        break;
                    case Difficulty.MEDIUM:
                        setCurrentDifficulty(Difficulty.HARD);
                        break;
                    case Difficulty.HARD:
                        setCurrentDifficulty(Difficulty.VERY_HARD);
                        break;
                    default:
                        // Stay at very hard if already at that level
                        break;
                }
            } else {
                // Decrease difficulty if getting incorrect answers
                switch (currentDifficulty) {
                    case Difficulty.VERY_HARD:
                        setCurrentDifficulty(Difficulty.HARD);
                        break;
                    case Difficulty.HARD:
                        setCurrentDifficulty(Difficulty.MEDIUM);
                        break;
                    case Difficulty.MEDIUM:
                        setCurrentDifficulty(Difficulty.EASY);
                        break;
                    default:
                        // Stay at easy if already at that level
                        break;
                }
            }
        }

        // Reset for next question
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        setIsCorrect(null);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                    <p className="mt-4 text-lg font-medium">Loading questions...</p>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
                <div className="text-center max-w-2xl">
                    <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
                    <p className="mb-6">There are currently no quantitative questions available at this difficulty level. Try another difficulty or check back later.</p>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => router.push('/gmat')}
                    >
                        Return to GMAT Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen flex flex-col p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl w-full mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">GMAT Quantitative Reasoning</h1>
                        <p className="text-gray-600">
                            Current Difficulty: <span className="font-medium">{currentDifficulty}</span>
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-medium">{formatTime(timer)}</p>
                        <p className="text-sm text-gray-600">
                            Score: {totalCorrect}/{totalAnswered} ({totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0}%)
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </span>
                        <h2 className="text-xl font-medium mb-4">{currentQuestion.content}</h2>
                    </div>

                    <div className="space-y-3 mb-6">
                        {currentQuestion.options.map((option) => (
                            <div
                                key={option.id}
                                className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedAnswer === option.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                    } ${isAnswerSubmitted && option.id === currentQuestion.solution
                                        ? 'border-green-500 bg-green-50'
                                        : isAnswerSubmitted && option.id === selectedAnswer && option.id !== currentQuestion.solution
                                            ? 'border-red-500 bg-red-50'
                                            : ''
                                    }`}
                                onClick={() => handleAnswerSelect(option.id)}
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                                        {option.id}
                                    </div>
                                    <div>{option.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isAnswerSubmitted && (
                        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                            <h3 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                {isCorrect ? 'Correct!' : 'Incorrect'}
                            </h3>
                            <p className="mt-2">{currentQuestion.explanation}</p>
                        </div>
                    )}

                    <div className="flex justify-end">
                        {!isAnswerSubmitted ? (
                            <button
                                className={`px-6 py-2 rounded font-medium ${selectedAnswer
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                onClick={handleSubmit}
                                disabled={!selectedAnswer}
                            >
                                Submit Answer
                            </button>
                        ) : (
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700"
                                onClick={handleNextQuestion}
                            >
                                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Get New Questions'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 