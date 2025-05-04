import Link from "next/link";

export default function DashboardPage() {
    // This would normally be fetched from the database
    const mockUserStats = {
        name: "John Doe",
        totalQuestions: 347,
        correctAnswers: 276,
        accuracy: 79.5,
        studyTime: 42.5,
        streakDays: 15,
        gmatScore: 720,
        greScore: 325,
        vocabularyMastered: 235,
        lastStudied: "Today",
        recentTopics: [
            { name: "GMAT Quantitative", performance: 85, color: "indigo" },
            { name: "GRE Verbal", performance: 78, color: "purple" },
            { name: "GMAT Verbal", performance: 82, color: "indigo" },
            { name: "GRE Quantitative", performance: 75, color: "purple" },
        ],
        weakAreas: [
            { name: "Data Sufficiency", examType: "GMAT", accuracy: 68 },
            { name: "Text Completion", examType: "GRE", accuracy: 72 },
            { name: "Sentence Correction", examType: "GMAT", accuracy: 74 },
        ],
        strongAreas: [
            { name: "Problem Solving", examType: "GMAT", accuracy: 92 },
            { name: "Reading Comprehension", examType: "GRE", accuracy: 88 },
            { name: "Quantitative Comparisons", examType: "GRE", accuracy: 86 },
        ],
        vocabularyProgress: {
            mastered: 235,
            learning: 85,
            toLearn: 430,
            totalWords: 750,
        },
        recentActivity: [
            { type: "Completed Practice", description: "GMAT Quantitative - Problem Solving", timestamp: "2 hours ago" },
            { type: "Learned Words", description: "10 new vocabulary words", timestamp: "Yesterday" },
            { type: "Completed Test", description: "GRE Full Practice Test", timestamp: "3 days ago" },
            { type: "Reviewed", description: "GMAT Verbal - Sentence Correction", timestamp: "5 days ago" },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                                Welcome back, {mockUserStats.name}
                            </h2>
                            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-indigo-100">
                                    <span>Last studied: {mockUserStats.lastStudied}</span>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-indigo-100">
                                    <span>Current streak: {mockUserStats.streakDays} days</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex md:mt-0 md:ml-4">
                            <Link
                                href="/gmat/study/quantitative"
                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                            >
                                Continue Studying
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Score Summary Cards */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Overall Stats Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Overall Accuracy
                                            </dt>
                                            <dd>
                                                <div className="text-lg font-medium text-gray-900">
                                                    {mockUserStats.accuracy}%
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link href="/dashboard/stats" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        View all stats
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* GMAT Score Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Estimated GMAT Score
                                            </dt>
                                            <dd>
                                                <div className="text-lg font-medium text-gray-900">
                                                    {mockUserStats.gmatScore}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link href="/gmat" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        GMAT Practice
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* GRE Score Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Estimated GRE Score
                                            </dt>
                                            <dd>
                                                <div className="text-lg font-medium text-gray-900">
                                                    {mockUserStats.greScore}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link href="/gre" className="font-medium text-purple-600 hover:text-purple-500">
                                        GRE Practice
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Vocabulary Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Vocabulary Mastered
                                            </dt>
                                            <dd>
                                                <div className="text-lg font-medium text-gray-900">
                                                    {mockUserStats.vocabularyMastered} / {mockUserStats.vocabularyProgress.totalWords}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link href="/vocabulary" className="font-medium text-green-600 hover:text-green-500">
                                        Continue Learning
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="mt-8 px-4 sm:px-0">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your Progress</h3>
                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Recent Topics */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h4 className="text-base font-medium text-gray-900">Recent Topics</h4>
                                <div className="mt-4 space-y-4">
                                    {mockUserStats.recentTopics.map((topic, index) => (
                                        <div key={index} className="relative pt-1">
                                            <div className="flex mb-2 items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                                        {topic.name}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-semibold inline-block text-indigo-600">
                                                        {topic.performance}%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                                <div
                                                    style={{ width: `${topic.performance}%` }}
                                                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${topic.color}-500`}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Study Time Breakdown */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h4 className="text-base font-medium text-gray-900">Study Summary</h4>
                                <div className="mt-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Total Questions</dt>
                                            <dd className="mt-1 text-sm text-gray-900">{mockUserStats.totalQuestions}</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Correct Answers</dt>
                                            <dd className="mt-1 text-sm text-gray-900">{mockUserStats.correctAnswers}</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Study Time</dt>
                                            <dd className="mt-1 text-sm text-gray-900">{mockUserStats.studyTime} hours</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Daily Streak</dt>
                                            <dd className="mt-1 text-sm text-gray-900">{mockUserStats.streakDays} days</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strengths & Weaknesses */}
                <div className="mt-8 px-4 sm:px-0">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your Strengths & Weaknesses</h3>
                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Strong Areas */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h4 className="text-base font-medium text-green-600">Strong Areas</h4>
                                <div className="mt-4">
                                    <div className="flow-root">
                                        <ul className="-my-5 divide-y divide-gray-200">
                                            {mockUserStats.strongAreas.map((area, index) => (
                                                <li key={index} className="py-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-500">
                                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                                {area.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate">
                                                                {area.examType}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                {area.accuracy}% accuracy
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weak Areas */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h4 className="text-base font-medium text-red-600">Areas to Improve</h4>
                                <div className="mt-4">
                                    <div className="flow-root">
                                        <ul className="-my-5 divide-y divide-gray-200">
                                            {mockUserStats.weakAreas.map((area, index) => (
                                                <li key={index} className="py-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-500">
                                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                                {area.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate">
                                                                {area.examType}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                                {area.accuracy}% accuracy
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/dashboard/recommendations" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Get Personalized Practice
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8 px-4 pb-12 sm:px-0">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Recent Activity
                            </h3>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            {mockUserStats.recentActivity.map((activity, index) => (
                                <li key={index}>
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium text-indigo-600 truncate">
                                                {activity.type}
                                            </p>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {activity.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    {activity.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 