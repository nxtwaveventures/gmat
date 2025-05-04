"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, FileText, Brain, Target, Clock, CheckCircle } from "lucide-react";

export default function GREVerbalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            GRE Verbal Reasoning
                        </h1>
                        <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
                            Master reading comprehension, text completion, and sentence equivalence questions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Section Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Time Management</CardTitle>
                                <CardDescription>
                                    30 minutes per section, 20 questions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• 1.5 minutes per question</li>
                                    <li>• Strategic time allocation</li>
                                    <li>• Practice with timers</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Question Types</CardTitle>
                                <CardDescription>
                                    Three main question formats
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Reading Comprehension</li>
                                    <li>• Text Completion</li>
                                    <li>• Sentence Equivalence</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Scoring</CardTitle>
                                <CardDescription>
                                    Understanding the scoring system
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• 130-170 point scale</li>
                                    <li>• Computer-adaptive</li>
                                    <li>• Section-level scoring</li>
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Reading Comprehension</CardTitle>
                                <CardDescription>
                                    Master complex passages and questions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Passage Analysis Techniques</li>
                                    <li>• Question Type Strategies</li>
                                    <li>• Practice Passages</li>
                                    <li>• Answer Choice Analysis</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal/reading">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Text Completion</CardTitle>
                                <CardDescription>
                                    Master vocabulary and context clues
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Context Clue Strategies</li>
                                    <li>• Vocabulary Building</li>
                                    <li>• Sentence Structure Analysis</li>
                                    <li>• Practice Questions</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal/text-completion">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Sentence Equivalence</CardTitle>
                                <CardDescription>
                                    Master synonym identification
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Synonym Recognition</li>
                                    <li>• Context Analysis</li>
                                    <li>• Word Relationships</li>
                                    <li>• Practice Exercises</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal/sentence-equivalence">Start Learning</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Vocabulary Builder</CardTitle>
                                <CardDescription>
                                    Essential GRE vocabulary
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• High-Frequency Words</li>
                                    <li>• Word Roots and Prefixes</li>
                                    <li>• Context-Based Learning</li>
                                    <li>• Practice Exercises</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="success" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary">Start Learning</Link>
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Section Tests</CardTitle>
                                <CardDescription>
                                    Practice specific question types
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Reading Comprehension Tests</li>
                                    <li>• Text Completion Tests</li>
                                    <li>• Sentence Equivalence Tests</li>
                                    <li>• Detailed Explanations</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal/practice">Start Practice</Link>
                                </Button>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Full-Length Tests</CardTitle>
                                <CardDescription>
                                    Complete verbal section practice
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Timed Practice Tests</li>
                                    <li>• Real Exam Format</li>
                                    <li>• Performance Analytics</li>
                                    <li>• Detailed Explanations</li>
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/gre/verbal/full-test">Start Test</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 