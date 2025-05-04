"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Choose Your Plan
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Get access to comprehensive GMAT and GRE preparation materials with our flexible pricing plans.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$29</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <CardDescription className="mt-2">
                                Perfect for self-paced learning
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Access to all study materials</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>5 practice tests per month</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Basic progress tracking</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Vocabulary flashcards</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="default" size="lg" asChild className="w-full">
                                <Link href="/auth/signup?plan=basic">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </span>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$49</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <CardDescription className="mt-2">
                                Best value for serious students
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Everything in Basic</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Unlimited practice tests</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Personalized study plans</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Priority support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="premium" size="lg" asChild className="w-full">
                                <Link href="/auth/signup?plan=premium">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Ultimate Plan */}
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Ultimate</CardTitle>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$99</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <CardDescription className="mt-2">
                                Complete preparation package
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Everything in Premium</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>1-on-1 tutoring sessions</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Essay review service</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>Mock interview preparation</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>24/7 expert support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="cta" size="lg" asChild className="w-full">
                                <Link href="/auth/signup?plan=ultimate">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose PrepMaster?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
                            <p className="text-gray-600">Access to all GMAT and GRE study materials in one place</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Check className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
                            <p className="text-gray-600">30-day money-back guarantee if you're not satisfied</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
                            <p className="text-gray-600">Choose the plan that best fits your needs and budget</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Can I switch plans later?</CardTitle>
                                <CardDescription>
                                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Is there a free trial?</CardTitle>
                                <CardDescription>
                                    Yes, we offer a 7-day free trial for all plans. No credit card required to start.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>What payment methods do you accept?</CardTitle>
                                <CardDescription>
                                    We accept all major credit cards, PayPal, and bank transfers.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Can I cancel anytime?</CardTitle>
                                <CardDescription>
                                    Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 