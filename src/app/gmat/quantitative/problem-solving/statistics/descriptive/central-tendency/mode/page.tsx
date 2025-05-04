"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function GMATModePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Mode
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master finding and applying the most frequent value for GMAT success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Mode Overview</h2>
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
                                    <li>• Formula application</li>
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
                                    Essential mode topics
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Finding Mode</li>
                                    <li>• Multiple Modes</li>
                                    <li>• Properties of Mode</li>
                                    <li>• Applications</li>
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
                                    <li>• Identify type</li>
                                    <li>• Choose formula</li>
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
                                <CardTitle>Finding Mode</CardTitle>
                                <CardDescription>
                                    Understanding the process
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Count Frequencies</li>
                                    <li>• Identify Most Common</li>
                                    <li>• Handle Ties</li>
                                    <li>• Examples</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/finding">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Multiple Modes</CardTitle>
                                <CardDescription>
                                    Understanding different cases
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Bimodal Data</li>
                                    <li>• Multimodal Data</li>
                                    <li>• No Mode</li>
                                    <li>• Applications</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/multiple">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Properties of Mode</CardTitle>
                                <CardDescription>
                                    Understanding mode properties
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Categorical Data</li>
                                    <li>• Discrete Values</li>
                                    <li>• Data Distribution</li>
                                    <li>• Applications</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/properties">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Applications</CardTitle>
                                <CardDescription>
                                    Understanding real-world applications
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Survey Analysis</li>
                                    <li>• Market Research</li>
                                    <li>• Test Scores</li>
                                    <li>• Problem Solving</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/applications">Start Learning</Link>
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
                                    <li>• Finding Mode</li>
                                    <li>• Multiple Modes</li>
                                    <li>• Properties</li>
                                    <li>• Applications</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/topic-practice">Start Practice</Link>
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
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/mode/mixed-practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 