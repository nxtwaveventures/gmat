"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart2, Calendar, BookText, FileText, Brain } from "lucide-react";

export default function GREPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            GRE Preparation
                        </h1>
                        <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
                            Master the GRE with our comprehensive study materials, practice tests, and analytics.
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Verbal Reasoning</CardTitle>
                                <CardDescription>
                                    Master reading comprehension, text completion, and sentence equivalence
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Reading Comprehension Strategies</li>
                                    <li>• Text Completion Techniques</li>
                                    <li>• Sentence Equivalence Practice</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Quantitative Reasoning</CardTitle>
                                <CardDescription>
                                    Strengthen your math skills with comprehensive practice materials
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Arithmetic and Algebra</li>
                                    <li>• Geometry and Data Analysis</li>
                                    <li>• Problem-Solving Strategies</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/quantitative">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Analytical Writing</CardTitle>
                                <CardDescription>
                                    Learn to write compelling essays with expert guidance
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Issue Essay Writing</li>
                                    <li>• Argument Essay Analysis</li>
                                    <li>• Writing Templates and Tips</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/writing">Start Learning</Link>
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Full-Length Tests</CardTitle>
                                <CardDescription>
                                    Simulate the actual GRE exam experience
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
                                    <Link href="/gre/practice/full-length">Start Test</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Section Tests</CardTitle>
                                <CardDescription>
                                    Focus on specific sections of the GRE
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Verbal Section Practice</li>
                                    <li>• Quantitative Section Practice</li>
                                    <li>• Writing Section Practice</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gre/practice/section">Start Test</Link>
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
                            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                <BarChart2 className="h-6 w-6 text-green-600" />
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
                                <Link href="/gre/analytics">View Analytics</Link>
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calendar className="h-6 w-6 text-green-600" />
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
                                    <Link href="/gre/schedule">Create Schedule</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Vocabulary Builder</CardTitle>
                                <CardDescription>
                                    Master GRE vocabulary with our comprehensive word lists
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