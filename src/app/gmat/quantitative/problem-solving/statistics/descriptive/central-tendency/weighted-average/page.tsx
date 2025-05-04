"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function WeightedAveragePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Weighted Average
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the calculation and application of weighted averages for GMAT success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    Time Management
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>2-3 minutes per question</li>
                                    <li>Quick calculations</li>
                                    <li>Formula application</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="h-5 w-5 text-blue-600" />
                                    Key Concepts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Basic Formula</li>
                                    <li>Multiple Weights</li>
                                    <li>Properties</li>
                                    <li>Applications</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-blue-600" />
                                    Problem-Solving Strategy
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Read carefully</li>
                                    <li>Identify weights</li>
                                    <li>Choose formula</li>
                                    <li>Verify answer</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Learning Materials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Materials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calculator className="h-5 w-5 text-blue-600" />
                                    Basic Formula
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    Learn the fundamental weighted average formula and its components.
                                </p>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/basic">
                                        Start Learning
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    Applications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    Explore real-world applications of weighted averages in various scenarios.
                                </p>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/applications">
                                        Start Learning
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Practice Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-600" />
                                    Topic-wise Practice
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    Practice questions organized by specific topics and concepts.
                                </p>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/practice">
                                        Start Practice
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-blue-600" />
                                    Mixed Practice
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    Practice with random questions covering all weighted average concepts.
                                </p>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency/weighted-average/mixed-practice">
                                        Start Practice
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 