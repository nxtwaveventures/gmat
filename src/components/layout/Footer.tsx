import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">GMAT</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/gmat/study/quantitative" className="text-base text-gray-500 hover:text-gray-900">
                                    Quantitative
                                </Link>
                            </li>
                            <li>
                                <Link href="/gmat/study/verbal" className="text-base text-gray-500 hover:text-gray-900">
                                    Verbal
                                </Link>
                            </li>
                            <li>
                                <Link href="/gmat/study/integrated" className="text-base text-gray-500 hover:text-gray-900">
                                    Integrated
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">GRE</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/gre/study/quantitative" className="text-base text-gray-500 hover:text-gray-900">
                                    Quantitative
                                </Link>
                            </li>
                            <li>
                                <Link href="/gre/study/verbal" className="text-base text-gray-500 hover:text-gray-900">
                                    Verbal
                                </Link>
                            </li>
                            <li>
                                <Link href="/gre/study/analytical" className="text-base text-gray-500 hover:text-gray-900">
                                    Analytical
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/gmat/study/vocabulary" className="text-base text-gray-500 hover:text-gray-900">
                                    Vocabulary
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice-tests" className="text-base text-gray-500 hover:text-gray-900">
                                    Practice Tests
                                </Link>
                            </li>
                            <li>
                                <Link href="/study-plans" className="text-base text-gray-500 hover:text-gray-900">
                                    Study Plans
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} PrepMaster. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 