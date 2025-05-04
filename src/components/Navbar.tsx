'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold text-blue-600">PrepMaster</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/gmat"
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/gmat') ? 'text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            GMAT
                        </Link>
                        <Link
                            href="/gre"
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/gre') ? 'text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            GRE
                        </Link>
                        <Link
                            href="/vocabulary"
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/vocabulary') ? 'text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            Vocabulary
                        </Link>
                        <Link
                            href="/pricing"
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" asChild>
                            <Link href="/auth/login">Log in</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/auth/signup">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/gmat"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/gmat') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            GMAT
                        </Link>
                        <Link
                            href="/gre"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/gre') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            GRE
                        </Link>
                        <Link
                            href="/vocabulary"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/vocabulary') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            Vocabulary
                        </Link>
                        <Link
                            href="/pricing"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/pricing') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            Pricing
                        </Link>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <Button variant="ghost" asChild className="w-full">
                                        <Link href="/auth/login">Log in</Link>
                                    </Button>
                                </div>
                                <div className="ml-3">
                                    <Button asChild className="w-full">
                                        <Link href="/auth/signup">Get Started</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
} 