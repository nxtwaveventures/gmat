"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function ArithmeticMeanBasicPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Basic Arithmetic Mean
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the fundamental formula and applications of arithmetic mean.
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
                            <CardTitle>Arithmetic Mean Formula</CardTitle>
                            <CardDescription>
                                Understanding the basic formula and its components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Formula</h3>
                                    <p className="text-gray-700">
                                        Arithmetic Mean = (Sum of all values) ÷ (Number of values)
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Key Components:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        <li>Sum of all values: Add up all the numbers in the dataset</li>
                                        <li>Number of values: Count how many numbers are in the dataset</li>
                                        <li>Division: Divide the sum by the count</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Example:</h3>
                                    <p className="text-gray-700">
                                        For the numbers 4, 6, 8, 10, 12:<br />
                                        Sum = 4 + 6 + 8 + 10 + 12 = 40<br />
                                        Count = 5<br />
                                        Mean = 40 ÷ 5 = 8
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mean/basic/question/${num}`}>
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mean/basic/question/${num}`}>
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
                                            <Link href={`/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mean/basic/question/${num}`}>
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
        1: "Find the arithmetic mean of the numbers: 5, 7, 9, 11, 13",
        2: "Calculate the mean of: 2, 4, 6, 8, 10",
        3: "What is the average of: 10, 20, 30, 40, 50",
        4: "Find the mean of: 3, 6, 9, 12, 15",
        5: "Calculate the arithmetic mean of: 1, 2, 3, 4, 5"
    };
    return questions[num as keyof typeof questions] || "";
}

function getMediumQuestion(num: number): string {
    const questions = {
        6: "The mean of five numbers is 20. If one number is removed, the mean becomes 18. What was the removed number?",
        7: "A student's scores in five tests are: 75, 82, 88, 90, and x. If the mean is 85, what is x?",
        8: "The mean of three numbers is 15. If two of the numbers are 12 and 18, what is the third number?",
        9: "A class has 30 students. The mean score in a test is 75. If 5 students scored 90 each, what is the mean of the remaining students?",
        10: "The mean of four numbers is 25. If three numbers are 20, 25, and 30, what is the fourth number?"
    };
    return questions[num as keyof typeof questions] || "";
}

function getHardQuestion(num: number): string {
    const questions = {
        11: "The mean of a set of numbers is 50. If each number is increased by 10, what is the new mean?",
        12: "A company's monthly profits for the first six months are: $10,000, $12,000, $15,000, $18,000, $20,000, and $25,000. What is the mean profit?",
        13: "The mean of five numbers is 30. If one number is removed and the mean becomes 32, what was the removed number?",
        14: "A student's scores in six tests are: 85, 88, 92, 95, 98, and x. If the mean is 92, what is x?",
        15: "The mean of four numbers is 40. If three numbers are 35, 40, and 45, what is the fourth number?"
    };
    return questions[num as keyof typeof questions] || "";
} 