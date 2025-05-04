"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart2, Calendar, BookText, FileText, Brain } from "lucide-react";

export default function GMATPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            GMAT Preparation
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master the GMAT with our comprehensive study materials, practice tests, and analytics.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Study Materials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Quantitative</CardTitle>
                                <CardDescription>
                                    Master problem-solving and data sufficiency questions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Problem Solving Strategies</li>
                                    <li>• Data Sufficiency Techniques</li>
                                    <li>• Math Fundamentals Review</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/quantitative">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Verbal</CardTitle>
                                <CardDescription>
                                    Improve your reading comprehension and critical reasoning
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Reading Comprehension</li>
                                    <li>• Critical Reasoning</li>
                                    <li>• Sentence Correction</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/verbal">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Integrated Reasoning</CardTitle>
                                <CardDescription>
                                    Master multi-source reasoning and data interpretation
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Multi-Source Reasoning</li>
                                    <li>• Graphics Interpretation</li>
                                    <li>• Two-Part Analysis</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/integrated">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Practice Tests Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Tests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Full-Length Tests</CardTitle>
                                <CardDescription>
                                    Simulate the actual GMAT exam experience
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Timed Practice Tests</li>
                                    <li>• Real Exam Format</li>
                                    <li>• Detailed Explanations</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/practice/full-length">Start Test</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Section Tests</CardTitle>
                                <CardDescription>
                                    Focus on specific sections of the GMAT
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Quantitative Section Practice</li>
                                    <li>• Verbal Section Practice</li>
                                    <li>• Integrated Reasoning Practice</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gmat/practice/section">Start Test</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h2>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <BarChart2 className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle>Performance Analytics</CardTitle>
                            <CardDescription>
                                Track your progress and identify areas for improvement
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Detailed Performance Reports</li>
                                <li>• Progress Tracking</li>
                                <li>• Personalized Recommendations</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="cta" size="lg" asChild className="w-full">
                                <Link href="/gmat/analytics">View Analytics</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Additional Resources */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calendar className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Study Schedule</CardTitle>
                                <CardDescription>
                                    Create a personalized study plan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Customizable Schedule</li>
                                    <li>• Progress Tracking</li>
                                    <li>• Reminder Notifications</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/gmat/schedule">Create Schedule</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookText className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Vocabulary Builder</CardTitle>
                                <CardDescription>
                                    Master GMAT vocabulary with our comprehensive word lists
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• High-Frequency Words</li>
                                    <li>• Context-Based Learning</li>
                                    <li>• Practice Exercises</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 