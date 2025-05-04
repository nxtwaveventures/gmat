"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function GMATArithmeticPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            GMAT Arithmetic
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master fundamental arithmetic concepts essential for GMAT success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Arithmetic Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Time Management</CardTitle>
                                <CardDescription>
                                    Strategic approach to timing
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• 2-3 minutes per question</li>
                                    <li>• Quick calculations</li>
                                    <li>• Mental math strategies</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Key Concepts</CardTitle>
                                <CardDescription>
                                    Essential arithmetic topics
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Number Properties</li>
                                    <li>• Fractions & Decimals</li>
                                    <li>• Percentages</li>
                                    <li>• Ratios & Proportions</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Problem-Solving Strategy</CardTitle>
                                <CardDescription>
                                    Effective approach to questions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Read carefully</li>
                                    <li>• Identify key numbers</li>
                                    <li>• Choose best method</li>
                                    <li>• Verify answer</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Learning Materials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Materials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Number Properties</CardTitle>
                                <CardDescription>
                                    Understanding number types
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Integers and Decimals</li>
                                    <li>• Prime Numbers</li>
                                    <li>• Factors and Multiples</li>
                                    <li>• Number Operations</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/number-properties">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Fractions & Decimals</CardTitle>
                                <CardDescription>
                                    Working with fractions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Basic Operations</li>
                                    <li>• Converting Forms</li>
                                    <li>• Comparing Values</li>
                                    <li>• Word Problems</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/fractions">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Percentages</CardTitle>
                                <CardDescription>
                                    Working with percentages
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Basic Calculations</li>
                                    <li>• Percent Change</li>
                                    <li>• Interest Problems</li>
                                    <li>• Mixture Problems</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/percentages">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Ratios & Proportions</CardTitle>
                                <CardDescription>
                                    Understanding ratios
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Basic Ratios</li>
                                    <li>• Direct Proportion</li>
                                    <li>• Inverse Proportion</li>
                                    <li>• Word Problems</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/ratios">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Practice Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Topic-wise Practice</CardTitle>
                                <CardDescription>
                                    Practice by topic
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Number Properties</li>
                                    <li>• Fractions & Decimals</li>
                                    <li>• Percentages</li>
                                    <li>• Ratios & Proportions</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/topic-practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Mixed Practice</CardTitle>
                                <CardDescription>
                                    Practice all topics together
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Random Questions</li>
                                    <li>• Difficulty Levels</li>
                                    <li>• Timed Practice</li>
                                    <li>• Performance Tracking</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/arithmetic/mixed-practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 