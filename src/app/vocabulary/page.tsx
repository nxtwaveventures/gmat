"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart2, Calendar, BookText, FileText, Brain, Sparkles } from "lucide-react";

export default function VocabularyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Vocabulary Builder
                        </h1>
                        <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
                            Master GRE and GMAT vocabulary with our comprehensive word lists and interactive learning tools.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Interactive Learning Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Flashcards</CardTitle>
                                <CardDescription>
                                    Learn words through interactive flashcards
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Spaced Repetition</li>
                                    <li>• Audio Pronunciation</li>
                                    <li>• Example Sentences</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/flashcards">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Memory Stories</CardTitle>
                                <CardDescription>
                                    Learn words through memorable stories
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Contextual Learning</li>
                                    <li>• Visual Memory Aids</li>
                                    <li>• Interactive Stories</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/stories">Start Learning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookText className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Word Lists</CardTitle>
                                <CardDescription>
                                    Access comprehensive word lists
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• High-Frequency Words</li>
                                    <li>• Topic-Based Lists</li>
                                    <li>• Difficulty Levels</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/lists">View Lists</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Practice Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice & Review</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Practice Exercises</CardTitle>
                                <CardDescription>
                                    Test your knowledge with interactive exercises
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Multiple Choice Questions</li>
                                    <li>• Fill in the Blanks</li>
                                    <li>• Context Usage</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/practice">Start Practice</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Sparkles className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Custom Lists</CardTitle>
                                <CardDescription>
                                    Create and manage your own word lists
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Create Custom Lists</li>
                                    <li>• Share with Others</li>
                                    <li>• Track Progress</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="premium" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/custom">Create List</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Track Your Progress</h2>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <BarChart2 className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle>Learning Analytics</CardTitle>
                            <CardDescription>
                                Monitor your vocabulary learning progress
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Words Mastered</li>
                                <li>• Learning Streak</li>
                                <li>• Performance Reports</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="cta" size="lg" asChild className="w-full">
                                <Link href="/vocabulary/analytics">View Progress</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Additional Features */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Calendar className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Spaced Repetition</CardTitle>
                                <CardDescription>
                                    Optimize your learning with spaced repetition
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Smart Review Schedule</li>
                                    <li>• Adaptive Learning</li>
                                    <li>• Progress Tracking</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/spaced-repetition">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Sparkles className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Word of the Day</CardTitle>
                                <CardDescription>
                                    Learn a new word every day
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Daily Notifications</li>
                                    <li>• Usage Examples</li>
                                    <li>• Related Words</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/vocabulary/word-of-the-day">Subscribe</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 