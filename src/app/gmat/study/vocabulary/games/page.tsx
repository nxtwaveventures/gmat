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

interface GameCard {
    id: string;
    content: string;
    type: "word" | "definition";
    matched: boolean;
    selected: boolean;
}

export default function WordGamesPage() {
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [gameCards, setGameCards] = useState<GameCard[]>([]);
    const [selectedCards, setSelectedCards] = useState<GameCard[]>([]);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const response = await fetch("/api/vocabulary");
            const data = await response.json();
            setWords(data);
            initializeGame(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching words:", error);
            setLoading(false);
        }
    };

    const initializeGame = (wordList: VocabularyWord[]) => {
        const cards: GameCard[] = [];
        wordList.forEach((word) => {
            cards.push({
                id: `word-${word.id}`,
                content: word.word,
                type: "word",
                matched: false,
                selected: false,
            });
            cards.push({
                id: `def-${word.id}`,
                content: word.definition,
                type: "definition",
                matched: false,
                selected: false,
            });
        });
        // Shuffle the cards
        setGameCards(cards.sort(() => Math.random() - 0.5));
    };

    const handleCardClick = (card: GameCard) => {
        if (card.matched || selectedCards.length >= 2) return;

        setGameCards((prev) =>
            prev.map((c) =>
                c.id === card.id ? { ...c, selected: true } : c
            )
        );

        setSelectedCards((prev) => [...prev, card]);

        if (selectedCards.length === 1) {
            const firstCard = selectedCards[0];
            const secondCard = card;

            if (
                (firstCard.type === "word" && secondCard.type === "definition") ||
                (firstCard.type === "definition" && secondCard.type === "word")
            ) {
                const wordId = firstCard.id.split("-")[1];
                const defId = secondCard.id.split("-")[1];

                if (wordId === defId) {
                    // Match found
                    setScore((prev) => prev + 1);
                    setGameCards((prev) =>
                        prev.map((c) =>
                            c.id === firstCard.id || c.id === secondCard.id
                                ? { ...c, matched: true }
                                : c
                        )
                    );
                }
            }

            // Reset selection after a short delay
            setTimeout(() => {
                setGameCards((prev) =>
                    prev.map((c) =>
                        !c.matched ? { ...c, selected: false } : c
                    )
                );
                setSelectedCards([]);
            }, 1000);
        }
    };

    const resetGame = () => {
        initializeGame(words);
        setScore(0);
        setGameOver(false);
    };

    useEffect(() => {
        if (gameCards.length > 0 && gameCards.every((card) => card.matched)) {
            setGameOver(true);
        }
    }, [gameCards]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900">Loading game...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Word Matching Game</h1>
                    <p className="mt-2 text-gray-600">Match words with their definitions</p>
                    <div className="mt-4 text-xl font-semibold text-green-600">
                        Score: {score}
                    </div>
                </div>

                {gameOver ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Congratulations! You've completed the game!
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Your final score: {score} out of {words.length}
                        </p>
                        <Button onClick={resetGame}>Play Again</Button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {gameCards.map((card) => (
                            <Card
                                key={card.id}
                                className={`cursor-pointer transition-all ${card.matched
                                        ? "bg-green-50 border-green-200"
                                        : card.selected
                                            ? "bg-blue-50 border-blue-200"
                                            : "hover:shadow-md"
                                    }`}
                                onClick={() => handleCardClick(card)}
                            >
                                <CardContent className="p-6">
                                    <p className="text-center text-lg font-medium">
                                        {card.content}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 