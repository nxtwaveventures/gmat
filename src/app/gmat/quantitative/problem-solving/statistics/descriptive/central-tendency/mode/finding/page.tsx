"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function ModeFindingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Finding the Mode
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the process of finding the most frequent value in a dataset.
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
                            <CardTitle>Finding the Mode</CardTitle>
                            <CardDescription>
                                Understanding the process and its components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Steps to Find Mode:</h3>
                                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                        <li>Count the frequency of each value in the dataset</li>
                                        <li>Identify the value(s) with the highest frequency</li>
                                        <li>If multiple values have the same highest frequency, the dataset is multimodal</li>
                                        <li>If all values appear the same number of times, there is no mode</li>
                                    </ol>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Example 1 (Single Mode):</h3>
                                    <p className="text-gray-700">
                                        For the numbers 2, 4, 4, 6, 8, 4, 10:<br />
                                        1. Count frequencies: 2(1), 4(3), 6(1), 8(1), 10(1)<br />
                                        2. Highest frequency: 3 (for value 4)<br />
                                        3. Mode = 4
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Example 2 (Multiple Modes):</h3>
                                    <p className="text-gray-700">
                                        For the numbers 1, 2, 2, 3, 4, 4, 5:<br />
                                        1. Count frequencies: 1(1), 2(2), 3(1), 4(2), 5(1)<br />
                                        2. Highest frequency: 2 (for values 2 and 4)<br />
                                        3. Modes = 2 and 4 (bimodal)
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/finding/question/${num}`}>
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/finding/question/${num}`}>
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/finding/question/${num}`}>
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
        1: "Find the mode of the numbers: 2, 4, 4, 6, 8, 4, 10",
        2: "What is the mode of: 1, 2, 2, 3, 4, 4, 5",
        3: "Calculate the mode of: 5, 5, 7, 7, 7, 9, 9",
        4: "Find the mode of: 10, 20, 20, 30, 40, 40, 50",
        5: "What is the mode of: 3, 3, 3, 4, 5, 5, 5"
    };
    return questions[num as keyof typeof questions] || "";
}

function getMediumQuestion(num: number): string {
    const questions = {
        6: "A student's scores in six tests are: 75, 82, 88, 88, 90, 88. What is the mode?",
        7: "The ages of students in a class are: 20, 21, 21, 22, 22, 22, 23, 23. What is the mode?",
        8: "A company's daily sales (in $1000) for a week are: 10, 12, 12, 15, 15, 15, 18. What is the mode?",
        9: "The heights (in cm) of players in a team are: 180, 182, 182, 185, 185, 185, 188. What is the mode?",
        10: "A store's daily customer count for a week is: 50, 55, 55, 60, 60, 60, 65. What is the mode?"
    };
    return questions[num as keyof typeof questions] || "";
}

function getHardQuestion(num: number): string {
    const questions = {
        11: "In a dataset, if the mode is 25 and we add 5 to each number, what is the new mode?",
        12: "A company's monthly profits for the first six months are: $10,000, $12,000, $15,000, $15,000, $18,000, and $15,000. What is the mode?",
        13: "The mode of a set of numbers is 30. If we multiply each number by 2, what is the new mode?",
        14: "A student's scores in six tests are: 85, 88, 92, 92, 95, 92. If the highest score is increased by 5, what is the new mode?",
        15: "The mode of four numbers is 40. If three numbers are 35, 40, and 45, what is the fourth number?"
    };
    return questions[num as keyof typeof questions] || "";
} 