"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function WeightedAverageFindingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Finding Weighted Average
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the process of calculating weighted averages for GMAT success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Concept Explanation */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Concept Explanation</h2>
                    <Card className="bg-white shadow-lg">
                        <CardHeader>
                            <CardTitle>Finding Weighted Average</CardTitle>
                            <CardDescription>
                                Understanding the process and its components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Steps to Find Weighted Average:</h3>
                                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                        <li>Multiply each value by its corresponding weight</li>
                                        <li>Add up all the products (Sum of Value × Weight)</li>
                                        <li>Add up all the weights (Sum of Weights)</li>
                                        <li>Divide the sum of products by the sum of weights</li>
                                    </ol>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Example 1 (Simple Case):</h3>
                                    <p className="text-gray-700">
                                        Calculate the weighted average of test scores:<br />
                                        Test 1: 80 (weight: 2)<br />
                                        Test 2: 90 (weight: 3)<br />
                                        Test 3: 85 (weight: 1)<br /><br />
                                        Solution:<br />
                                        1. Sum of (Value × Weight) = (80 × 2) + (90 × 3) + (85 × 1) = 515<br />
                                        2. Sum of Weights = 2 + 3 + 1 = 6<br />
                                        3. Weighted Average = 515 ÷ 6 = 85.83
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Example 2 (Percentage Weights):</h3>
                                    <p className="text-gray-700">
                                        Calculate the final grade:<br />
                                        Midterm: 75 (30%)<br />
                                        Final: 85 (50%)<br />
                                        Project: 90 (20%)<br /><br />
                                        Solution:<br />
                                        1. Sum of (Value × Weight) = (75 × 0.3) + (85 × 0.5) + (90 × 0.2) = 82<br />
                                        2. Sum of Weights = 0.3 + 0.5 + 0.2 = 1<br />
                                        3. Weighted Average = 82
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Practice Questions */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Questions</h2>

                    {/* Easy Questions */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">Easy Questions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Card key={num} className="bg-white shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Question {num}</CardTitle>
                                        <CardDescription>Easy Level</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 mb-4">
                                            {getEasyQuestion(num)}
                                        </p>
                                        <Button variant="default" size="lg" asChild className="w-full">
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/finding/question/${num}`}>
                                                Start Practice
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Medium Questions */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Medium Questions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[6, 7, 8, 9, 10].map((num) => (
                                <Card key={num} className="bg-white shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Question {num}</CardTitle>
                                        <CardDescription>Medium Level</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 mb-4">
                                            {getMediumQuestion(num)}
                                        </p>
                                        <Button variant="default" size="lg" asChild className="w-full">
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/finding/question/${num}`}>
                                                Start Practice
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Hard Questions */}
                    <div>
                        <h3 className="text-2xl font-semibold text-red-600 mb-4">Hard Questions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[11, 12, 13, 14, 15].map((num) => (
                                <Card key={num} className="bg-white shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Question {num}</CardTitle>
                                        <CardDescription>Hard Level</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 mb-4">
                                            {getHardQuestion(num)}
                                        </p>
                                        <Button variant="default" size="lg" asChild className="w-full">
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/finding/question/${num}`}>
                                                Start Practice
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getEasyQuestion(num: number): string {
    const questions = {
        1: "Calculate the weighted average of test scores: Test 1 (80, weight: 2), Test 2 (90, weight: 3), Test 3 (85, weight: 1)",
        2: "Find the weighted average of prices: $10 (weight: 3), $15 (weight: 2), $20 (weight: 1)",
        3: "What is the weighted average of grades: A (90, weight: 2), B (80, weight: 3), C (70, weight: 1)",
        4: "Calculate the weighted average of speeds: 60 mph (weight: 2), 70 mph (weight: 3), 80 mph (weight: 1)",
        5: "Find the weighted average of temperatures: 20°C (weight: 3), 25°C (weight: 2), 30°C (weight: 1)"
    };
    return questions[num as keyof typeof questions] || "";
}

function getMediumQuestion(num: number): string {
    const questions = {
        6: "A student's final grade is based on: Midterm (75, 30%), Final (85, 50%), Project (90, 20%). What is the final grade?",
        7: "A company's stock price is weighted by volume: $50 (1000 shares), $55 (2000 shares), $60 (3000 shares). What is the weighted average price?",
        8: "Calculate the weighted average of customer ratings: 4 stars (100 reviews), 3 stars (200 reviews), 2 stars (50 reviews)",
        9: "A portfolio has three investments: $10,000 (5% return), $20,000 (7% return), $30,000 (6% return). What is the weighted average return?",
        10: "Find the weighted average of employee salaries: $50,000 (10 employees), $60,000 (15 employees), $70,000 (5 employees)"
    };
    return questions[num as keyof typeof questions] || "";
}

function getHardQuestion(num: number): string {
    const questions = {
        11: "A company's quarterly profits are weighted by market conditions: Q1 ($100,000, weight: 0.8), Q2 ($120,000, weight: 1.0), Q3 ($90,000, weight: 0.9), Q4 ($110,000, weight: 1.1). What is the weighted average profit?",
        12: "A student's GPA is calculated from: Math (3.5, 4 credits), English (3.0, 3 credits), Science (4.0, 4 credits), History (3.7, 3 credits). What is the weighted GPA?",
        13: "A real estate portfolio has properties worth: $200,000 (5% return), $300,000 (7% return), $500,000 (6% return). What is the weighted average return?",
        14: "A company's product ratings are weighted by sales: 4.5 stars (1000 units), 4.0 stars (2000 units), 3.5 stars (500 units). What is the weighted average rating?",
        15: "Calculate the weighted average of interest rates: 5% ($50,000), 6% ($100,000), 7% ($150,000), 8% ($200,000)"
    };
    return questions[num as keyof typeof questions] || "";
} 