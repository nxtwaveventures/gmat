type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface VocabularyWord {
    word: string;
    definition: string;
    example: string;
    difficulty: Difficulty;
    imageUrl?: string;
    story?: string;
    etymology?: string;
    category: string;
    synonyms?: string[];
    antonyms?: string[];
    usageNotes?: string;
}

// Word difficulty analyzer
export const analyzeWordDifficulty = (word: string, definition: string): Difficulty => {
    const wordLength = word.length;
    const definitionLength = definition.length;
    const hasComplexPrefixes = /^(un|dis|in|im|ir|re|pre|post|sub|super|trans|inter|intra|extra|ultra|hyper|hypo|macro|micro)/i.test(word);
    const hasComplexSuffixes = /(tion|sion|ment|ance|ence|ity|ness|ism|ist|al|ial|ical|ous|ious|eous|ious|able|ible|ive|ative|itive|ful|less|ly|ize|ise|ify|fy)$/i.test(word);

    let score = 0;

    // Word length scoring
    if (wordLength > 12) score += 2;
    else if (wordLength > 8) score += 1;

    // Definition complexity
    if (definitionLength > 100) score += 2;
    else if (definitionLength > 50) score += 1;

    // Complex prefixes/suffixes
    if (hasComplexPrefixes) score += 1;
    if (hasComplexSuffixes) score += 1;

    // Determine difficulty based on score
    if (score >= 4) return "HARD";
    if (score >= 2) return "MEDIUM";
    return "EASY";
};

// Categories
export const CATEGORIES = {
    BUSINESS: 'Business and Economics',
    ACADEMIC: 'Academic and Scientific',
    COMMON: 'Common GRE/GMAT',
    TECHNICAL: 'Technical Terms',
    LITERARY: 'Literary Terms',
    HISTORICAL: 'Historical Terms',
    PHILOSOPHICAL: 'Philosophical Terms',
    MEDICAL: 'Medical Terms',
    LEGAL: 'Legal Terms',
    ART: 'Art and Music',
    TECHNOLOGY: 'Technology Terms',
    SOCIAL: 'Social Science',
    PSYCHOLOGY: 'Psychology Terms',
    ENVIRONMENTAL: 'Environmental Terms',
    POLITICAL: 'Political Terms'
} as const;

// Business and Economics Terms
const businessTerms: VocabularyWord[] = [
    {
        word: "Amortize",
        definition: "To gradually write off the initial cost of an asset",
        example: "The company will amortize the cost of the new software over three years.",
        difficulty: "MEDIUM",
        category: CATEGORIES.BUSINESS,
        story: "Think of paying off a loan in small, regular payments - that's amortization. The word comes from Latin 'mort' meaning 'death' - as if you're 'killing off' the debt bit by bit.",
        etymology: "From Latin 'ad mortem' (to death) + '-ize' (to make)",
        synonyms: ["depreciate", "write off", "allocate"],
        antonyms: ["capitalize", "lump sum"],
        usageNotes: "Common in accounting and finance contexts"
    },
    // Add more business terms...
];

// Academic and Scientific Terms
const academicTerms: VocabularyWord[] = [
    {
        word: "Hypothesis",
        definition: "A proposed explanation made on the basis of limited evidence",
        example: "The scientist's hypothesis about climate change was later proven correct.",
        difficulty: "EASY",
        category: CATEGORIES.ACADEMIC,
        story: "Think of a detective making an educated guess about a case - that's a hypothesis. The word comes from Greek 'hypo' (under) + 'thesis' (placing).",
        etymology: "From Greek 'hypothesis' (foundation, basis)",
        synonyms: ["theory", "proposition", "supposition"],
        antonyms: ["fact", "certainty"],
        usageNotes: "Common in scientific and research contexts"
    },
    // Add more academic terms...
];

// Common GRE/GMAT Words
const commonWords: VocabularyWord[] = [
    {
        word: "Aberration",
        definition: "A departure from what is normal, usual, or expected",
        example: "The sudden drop in temperature was an aberration from the typical summer weather.",
        difficulty: "HARD",
        category: CATEGORIES.COMMON,
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60",
        story: "Imagine a straight line suddenly taking a sharp turn - that's an aberration. The word comes from Latin 'aberrare' meaning 'to wander away'.",
        etymology: "From Latin 'aberrare' (to wander away) + '-tion' (act of)",
        synonyms: ["anomaly", "deviation", "irregularity"],
        antonyms: ["norm", "regularity", "conformity"],
        usageNotes: "Often used in scientific and statistical contexts"
    },
    // Add more common words...
];

// Technical Terms
const technicalTerms: VocabularyWord[] = [
    {
        word: "Algorithm",
        definition: "A process or set of rules to be followed in calculations or problem-solving",
        example: "The search engine uses a complex algorithm to rank web pages.",
        difficulty: "MEDIUM",
        category: CATEGORIES.TECHNICAL,
        story: "Think of a recipe that tells you exactly what steps to follow - that's an algorithm. The word comes from the name of a Persian mathematician, Al-Khwarizmi.",
        etymology: "From Latin 'algoritmi', from the name of Persian mathematician Al-Khwarizmi",
        synonyms: ["procedure", "method", "process"],
        antonyms: ["random", "chaos"],
        usageNotes: "Common in computer science and mathematics"
    },
    // Add more technical terms...
];

// Literary Terms
const literaryTerms: VocabularyWord[] = [
    {
        word: "Metaphor",
        definition: "A figure of speech that makes an implicit comparison between two unlike things",
        example: "Her eyes were diamonds, sparkling in the light.",
        difficulty: "EASY",
        category: CATEGORIES.LITERARY,
        story: "Imagine saying someone is a ray of sunshine - that's a metaphor. The word comes from Greek 'metaphora' meaning 'transfer'.",
        etymology: "From Greek 'metaphora' (transfer, carrying over)",
        synonyms: ["analogy", "comparison", "figure of speech"],
        antonyms: ["literal", "explicit"],
        usageNotes: "Common in literature and creative writing"
    },
    // Add more literary terms...
];

// Historical Terms
const historicalTerms: VocabularyWord[] = [
    {
        word: "Renaissance",
        definition: "A period of European cultural, artistic, political, and economic rebirth following the Middle Ages",
        example: "The Renaissance period saw a renewed interest in classical learning and values.",
        difficulty: "MEDIUM",
        category: CATEGORIES.HISTORICAL,
        story: "Think of a phoenix rising from ashes - that's what the Renaissance was for Europe. The word comes from French 'renaissance' meaning 'rebirth'.",
        etymology: "From French 'renaissance' (rebirth), from Latin 're-' (again) + 'nasci' (to be born)",
        synonyms: ["rebirth", "revival", "renewal"],
        antonyms: ["decline", "decay"],
        usageNotes: "Often capitalized when referring to the specific historical period"
    },
    // Add more historical terms...
];

// Philosophical Terms
const philosophicalTerms: VocabularyWord[] = [
    {
        word: "Epistemology",
        definition: "The theory of knowledge, especially regarding its methods, validity, and scope",
        example: "The philosopher's work in epistemology challenged traditional notions of truth and knowledge.",
        difficulty: "HARD",
        category: CATEGORIES.PHILOSOPHICAL,
        story: "Imagine a detective investigating how we know what we know - that's epistemology. The word combines Greek 'episteme' (knowledge) and 'logos' (study).",
        etymology: "From Greek 'episteme' (knowledge) + 'logos' (study)",
        synonyms: ["theory of knowledge", "philosophy of knowledge"],
        usageNotes: "Common in academic and philosophical contexts"
    },
    // Add more philosophical terms...
];

// Medical Terms
const medicalTerms: VocabularyWord[] = [
    {
        word: "Pathology",
        definition: "The study of the causes and effects of diseases",
        example: "The pathology report revealed the underlying cause of the patient's symptoms.",
        difficulty: "MEDIUM",
        category: CATEGORIES.MEDICAL,
        story: "Think of a detective investigating the story behind a disease - that's pathology. The word comes from Greek 'pathos' (suffering) + 'logos' (study).",
        etymology: "From Greek 'pathos' (suffering) + 'logos' (study)",
        synonyms: ["disease study", "morbid anatomy"],
        usageNotes: "Often used in medical and scientific contexts"
    },
    // Add more medical terms...
];

// Combine all categories
export const vocabularyWords: VocabularyWord[] = [
    ...businessTerms,
    ...academicTerms,
    ...commonWords,
    ...technicalTerms,
    ...literaryTerms,
    ...historicalTerms,
    ...philosophicalTerms,
    ...medicalTerms
];

// Enhanced helper functions
export const getWordsByDifficulty = (difficulty: Difficulty): VocabularyWord[] => {
    return vocabularyWords.filter(word => word.difficulty === difficulty);
};

export const getWordsByCategory = (category: string): VocabularyWord[] => {
    return vocabularyWords.filter(word => word.category === category);
};

export const getRandomWords = (count: number, options?: {
    difficulty?: Difficulty;
    category?: string;
}): VocabularyWord[] => {
    let filteredWords = vocabularyWords;

    if (options?.difficulty) {
        filteredWords = filteredWords.filter(word => word.difficulty === options.difficulty);
    }

    if (options?.category) {
        filteredWords = filteredWords.filter(word => word.category === options.category);
    }

    const shuffled = [...filteredWords].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const searchWords = (query: string): VocabularyWord[] => {
    const searchTerm = query.toLowerCase();
    return vocabularyWords.filter(word =>
        word.word.toLowerCase().includes(searchTerm) ||
        word.definition.toLowerCase().includes(searchTerm) ||
        word.example.toLowerCase().includes(searchTerm) ||
        word.synonyms?.some(syn => syn.toLowerCase().includes(searchTerm)) ||
        word.antonyms?.some(ant => ant.toLowerCase().includes(searchTerm))
    );
}; 