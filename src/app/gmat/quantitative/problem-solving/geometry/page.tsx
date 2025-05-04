"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Brain, Target, Clock, CheckCircle, FileText } from "lucide-react";

export default function GeometryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Geometry
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Master geometric concepts and problem-solving strategies for GMAT success.
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
                                    <Clock className="h-6 w-6 text-blue-600" />
                                    Time Management
                                </CardTitle>
                                <CardDescription>Strategies for timing</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• 2-3 minutes per question</li>
                                    <li>• Quick diagram drawing</li>
                                    <li>• Formula application</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="h-6 w-6 text-blue-600" />
                                    Key Concepts
                                </CardTitle>
                                <CardDescription>Essential topics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lines and Angles</li>
                                    <li>• Triangles</li>
                                    <li>• Circles</li>
                                    <li>• Polygons</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-6 w-6 text-blue-600" />
                                    Problem-Solving Strategy
                                </CardTitle>
                                <CardDescription>Effective approaches</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Draw diagrams</li>
                                    <li>• Identify given information</li>
                                    <li>• Apply relevant formulas</li>
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
                                <CardTitle className="flex items-center gap-2">
                                    <Calculator className="h-6 w-6 text-blue-600" />
                                    Basic Concepts
                                </CardTitle>
                                <CardDescription>Fundamental geometric principles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Points, Lines, and Planes</li>
                                    <li>• Angles and Their Types</li>
                                    <li>• Parallel and Perpendicular Lines</li>
                                    <li>• Basic Constructions</li>
                                </ul>
                                <Button variant="default" size="lg" asChild className="w-full mt-4">
                                    <Link href="/gmat/quantitative/problem-solving/geometry/basic">
                                        Start Learning
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                    Advanced Topics
                                </CardTitle>
                                <CardDescription>Complex geometric concepts</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Coordinate Geometry</li>
                                    <li>• Transformations</li>
                                    <li>• 3D Geometry</li>
                                    <li>• Geometric Proofs</li>
                                </ul>
                                <Button variant="default" size="lg" asChild className="w-full mt-4">
                                    <Link href="/gmat/quantitative/problem-solving/geometry/advanced">
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
                                    <CheckCircle className="h-6 w-6 text-blue-600" />
                                    Topic-wise Practice
                                </CardTitle>
                                <CardDescription>Practice by topic</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lines and Angles</li>
                                    <li>• Triangles</li>
                                    <li>• Circles</li>
                                    <li>• Polygons</li>
                                </ul>
                                <Button variant="default" size="lg" asChild className="w-full mt-4">
                                    <Link href="/gmat/quantitative/problem-solving/geometry/practice">
                                        Start Practice
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-6 w-6 text-blue-600" />
                                    Mixed Practice
                                </CardTitle>
                                <CardDescription>Random questions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Random Questions</li>
                                    <li>• Varying Difficulty</li>
                                    <li>• Timed Practice</li>
                                    <li>• Performance Tracking</li>
                                </ul>
                                <Button variant="default" size="lg" asChild className="w-full mt-4">
                                    <Link href="/gmat/quantitative/problem-solving/geometry/mixed">
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