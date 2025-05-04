"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, FileText, Target, Clock, CheckCircle, Calculator, BookOpen } from "lucide-react";

export default function GMATDataSufficiencyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            GMAT Data Sufficiency
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the art of determining whether given data is sufficient to answer questions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Sufficiency Overview</h2>
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
                                    <li>• Read question first</li>
                                    <li>• Evaluate statements</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Answer Choices</CardTitle>
                                <CardDescription>
                                    Understanding the options
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Statement 1 alone</li>
                                    <li>• Statement 2 alone</li>
                                    <li>• Both statements</li>
                                    <li>• Neither statement</li>
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
                                    <li>• Understand the question</li>
                                    <li>• Simplify statements</li>
                                    <li>• Test cases</li>
                                    <li>• Eliminate options</li>
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
                                    <Brain className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Question Analysis</CardTitle>
                                <CardDescription>
                                    Understanding question types
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Value Questions</li>
                                    <li>• Yes/No Questions</li>
                                    <li>• Must Be True Questions</li>
                                    <li>• Could Be True Questions</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/data-sufficiency/question-analysis">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Statement Evaluation</CardTitle>
                                <CardDescription>
                                    Analyzing given statements
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Statement Types</li>
                                    <li>• Common Traps</li>
                                    <li>• Statement Combinations</li>
                                    <li>• Practice Examples</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/data-sufficiency/statement-evaluation">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Answer Choice Strategies</CardTitle>
                                <CardDescription>
                                    Mastering answer selection
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• AD/BCE Approach</li>
                                    <li>• Statement Analysis</li>
                                    <li>• Common Mistakes</li>
                                    <li>• Practice Questions</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/data-sufficiency/answer-strategies">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Practice Questions</CardTitle>
                                <CardDescription>
                                    Topic-wise practice sets
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Arithmetic Questions</li>
                                    <li>• Algebra Questions</li>
                                    <li>• Geometry Questions</li>
                                    <li>• Statistics Questions</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/data-sufficiency/practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Practice Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Tests</h2>
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
                                    <li>• Arithmetic Practice</li>
                                    <li>• Algebra Practice</li>
                                    <li>• Geometry Practice</li>
                                    <li>• Statistics Practice</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/data-sufficiency/topic-practice">Start Practice</Link>
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
                                    <Link href="/gmat/quantitative/data-sufficiency/mixed-practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 