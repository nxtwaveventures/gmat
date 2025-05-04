"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function GMATDescriptiveStatisticsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Descriptive Statistics
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master measures of central tendency and dispersion for GMAT success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Descriptive Statistics Overview</h2>
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
                                    Essential statistics topics
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Measures of Central Tendency</li>
                                    <li>• Measures of Dispersion</li>
                                    <li>• Data Interpretation</li>
                                    <li>• Statistical Analysis</li>
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
                                <CardTitle>Measures of Central Tendency</CardTitle>
                                <CardDescription>
                                    Understanding central values
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Mean (Arithmetic Average)</li>
                                    <li>• Median (Middle Value)</li>
                                    <li>• Mode (Most Frequent)</li>
                                    <li>• Weighted Average</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/central-tendency">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Measures of Dispersion</CardTitle>
                                <CardDescription>
                                    Understanding data spread
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Range</li>
                                    <li>• Standard Deviation</li>
                                    <li>• Variance</li>
                                    <li>• Interquartile Range</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/dispersion">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Data Interpretation</CardTitle>
                                <CardDescription>
                                    Understanding data analysis
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Frequency Distributions</li>
                                    <li>• Histograms</li>
                                    <li>• Box Plots</li>
                                    <li>• Scatter Plots</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/interpretation">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Statistical Analysis</CardTitle>
                                <CardDescription>
                                    Understanding statistical methods
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Normal Distribution</li>
                                    <li>• Percentiles</li>
                                    <li>• Z-Scores</li>
                                    <li>• Applications</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/analysis">Start Learning</Link>
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
                                    <li>• Central Tendency</li>
                                    <li>• Dispersion</li>
                                    <li>• Data Interpretation</li>
                                    <li>• Statistical Analysis</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/topic-practice">Start Practice</Link>
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
                                    <Link href="/gmat/quantitative/problem-solving/statistics/descriptive/mixed-practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 