import { PrismaClient, ExamType, Section, Difficulty, StudyMode, MasteryLevel, QuoteCategory } from '@prisma/client';
import { hash } from 'bcrypt';

// Define interfaces for our data structures
interface QuestionOption {
    id: string;
    text: string;
}

interface QuestionData {
    examType: ExamType;
    section: Section;
    difficulty: Difficulty;
    content: string;
    options: QuestionOption[];
    solution: string;
    explanation: string;
}

interface VocabularyWordData {
    word: string;
    definition: string;
    example: string;
    partOfSpeech: string;
    difficulty: Difficulty;
    synonyms: string;
    antonyms: string;
}

interface QuoteData {
    content: string;
    author: string;
    category: QuoteCategory;
}

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Create a demo user
    const hashedPassword = await hash('password123', 10);
    const demoUser = await prisma.user.upsert({
        where: { email: 'demo@example.com' },
        update: {},
        create: {
            email: 'demo@example.com',
            name: 'Demo User',
            password: hashedPassword,
        },
    });

    console.log(`Created demo user with id: ${demoUser.id}`);

    // Create user stats for the demo user
    await prisma.userStats.upsert({
        where: { userId: demoUser.id },
        update: {},
        create: {
            userId: demoUser.id,
            totalQuestionsAttempted: 120,
            correctAnswers: 95,
            gmatScore: 710,
            greScore: 320,
            studyTimeMinutes: 1240,
            streakDays: 7,
            lastStudyDate: new Date(),
        },
    });

    // Create sample GMAT questions
    const gmatQuestions: QuestionData[] = [
        {
            examType: ExamType.GMAT,
            section: Section.QUANTITATIVE,
            difficulty: Difficulty.MEDIUM,
            content: 'If x + y = 10 and xy = 21, what is the value of x² + y²?',
            options: [
                { id: 'A', text: '58' },
                { id: 'B', text: '79' },
                { id: 'C', text: '100' },
                { id: 'D', text: '121' },
                { id: 'E', text: '142' },
            ],
            solution: 'A',
            explanation: 'Using the formula (x + y)² = x² + y² + 2xy, we get x² + y² = (x + y)² - 2xy = 10² - 2(21) = 100 - 42 = 58.',
        },
        {
            examType: ExamType.GMAT,
            section: Section.VERBAL,
            difficulty: Difficulty.HARD,
            content: "The politician\\'s speech was marked by an undercurrent of ________ that alienated many voters, despite its seemingly positive message.",
            options: [
                { id: 'A', text: 'cynicism' },
                { id: 'B', text: 'optimism' },
                { id: 'C', text: 'specificity' },
                { id: 'D', text: 'vagueness' },
                { id: 'E', text: 'eloquence' },
            ],
            solution: 'A',
            explanation: 'The statement indicates a contrast between the seemingly positive message and something negative that alienated voters. "Cynicism" provides this contrast, as it would undermine a seemingly positive message.',
        },
        {
            examType: ExamType.GMAT,
            section: Section.INTEGRATED_REASONING,
            difficulty: Difficulty.MEDIUM,
            content: 'According to the data in the table, which country showed the highest percentage increase in GDP between 2019 and 2020?',
            options: [
                { id: 'A', text: 'Country A' },
                { id: 'B', text: 'Country B' },
                { id: 'C', text: 'Country C' },
                { id: 'D', text: 'Country D' },
            ],
            solution: 'C',
            explanation: 'Country C showed an increase from 245 billion to 294 billion, which is a 20% increase. This is higher than any other country in the table.',
        },
    ];

    for (const question of gmatQuestions) {
        await prisma.question.create({
            data: {
                examType: question.examType,
                section: question.section,
                difficulty: question.difficulty,
                content: question.content,
                options: JSON.parse(JSON.stringify(question.options)),
                solution: question.solution,
                explanation: question.explanation,
            },
        });
    }

    console.log(`Created ${gmatQuestions.length} GMAT questions`);

    // Create sample GRE questions
    const greQuestions: QuestionData[] = [
        {
            examType: ExamType.GRE,
            section: Section.QUANTITATIVE,
            difficulty: Difficulty.MEDIUM,
            content: 'If the average (arithmetic mean) of 5 numbers is 16, and the average of 3 of those numbers is 15, what is the average of the other 2 numbers?',
            options: [
                { id: 'A', text: '14.5' },
                { id: 'B', text: '17' },
                { id: 'C', text: '17.5' },
                { id: 'D', text: '18' },
                { id: 'E', text: '18.5' },
            ],
            solution: 'C',
            explanation: 'If the average of 5 numbers is 16, then their sum is 5 × 16 = 80. If the average of 3 of those numbers is 15, their sum is 3 × 15 = 45. The sum of the remaining 2 numbers is 80 - 45 = 35. Therefore, their average is 35 ÷ 2 = 17.5.',
        },
        {
            examType: ExamType.GRE,
            section: Section.VERBAL,
            difficulty: Difficulty.HARD,
            content: 'The professor's manner of teaching was so ________ that it often ________ even the most attentive students.',
            options: [
                { id: 'A', text: 'engrossing ... captivated' },
                { id: 'B', text: 'tedious ... invigorated' },
                { id: 'C', text: 'soporific ... discomfited' },
                { id: 'D', text: 'abstruse ... bewildered' },
                { id: 'E', text: 'methodical ... confused' },
            ],
            solution: 'D',
            explanation: 'The sentence suggests that the professor's teaching style had a negative effect on students. "Abstruse"(hard to understand) could cause students to be "bewildered"(confused or perplexed).',
        },
        {
            examType: ExamType.GRE,
            section: Section.ANALYTICAL_WRITING,
            difficulty: Difficulty.MEDIUM,
            content: 'Prompt: "In order to improve public health, governments should tax unhealthy foods and subsidize nutritious foods." Write a response in which you discuss your views on this policy recommendation.',
            options: [],
            solution: '',
            explanation: 'A strong essay would evaluate the merits and potential drawbacks of such a policy, considering factors like effectiveness, implementation challenges, economic impacts, and possible alternatives.',
        },
    ];

    for (const question of greQuestions) {
        await prisma.question.create({
            data: {
                examType: question.examType,
                section: question.section,
                difficulty: question.difficulty,
                content: question.content,
                options: JSON.parse(JSON.stringify(question.options)),
                solution: question.solution,
                explanation: question.explanation,
            },
        });
    }

    console.log(`Created ${greQuestions.length} GRE questions`);

    // Create sample vocabulary words
    const vocabularyWords: VocabularyWordData[] = [
        {
            word: 'Ubiquitous',
            definition: 'Present, appearing, or found everywhere',
            example: 'Mobile phones have become ubiquitous in modern society.',
            partOfSpeech: 'adjective',
            difficulty: Difficulty.MEDIUM,
            synonyms: 'omnipresent, pervasive, universal',
            antonyms: 'rare, scarce, uncommon',
        },
        {
            word: 'Ameliorate',
            definition: 'Make (something bad or unsatisfactory) better',
            example: "The treatment ameliorated the patient\\'s symptoms.",
            partOfSpeech: 'verb',
            difficulty: Difficulty.HARD,
            synonyms: 'improve, enhance, better',
            antonyms: 'worsen, aggravate, exacerbate',
        },
        {
            word: 'Perspicacious',
            definition: 'Having a ready insight into and understanding of things',
            example: 'She made perspicacious observations about the company's financial situation.',
            partOfSpeech: 'adjective',
            difficulty: Difficulty.VERY_HARD,
            synonyms: 'astute, perceptive, insightful',
            antonyms: 'unperceptive, obtuse, dense',
        },
    ];

    for (const word of vocabularyWords) {
        await prisma.vocabularyWord.create({
            data: {
                word: word.word,
                definition: word.definition,
                example: word.example,
                partOfSpeech: word.partOfSpeech,
                difficulty: word.difficulty,
                synonyms: word.synonyms,
                antonyms: word.antonyms,
            },
        });
    }

    console.log(`Created ${vocabularyWords.length} vocabulary words`);

    // Create some vocabulary progress for the demo user
    const vocabularyWordsFromDb = await prisma.vocabularyWord.findMany();

    for (const word of vocabularyWordsFromDb) {
        // Randomly assign mastery levels
        const masteryLevels: MasteryLevel[] = ['NEW', 'LEARNING', 'REVIEWING', 'MASTERED'];
        const randomMastery = masteryLevels[Math.floor(Math.random() * masteryLevels.length)];

        const now = new Date();
        let nextReview: Date;

        switch (randomMastery) {
            case 'NEW':
                nextReview = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);
                break;
            case 'LEARNING':
                nextReview = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
                break;
            case 'REVIEWING':
                nextReview = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
                break;
            case 'MASTERED':
                nextReview = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
                break;
            default:
                nextReview = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);
        }

        await prisma.vocabularyProgress.create({
            data: {
                userId: demoUser.id,
                wordId: word.id,
                mastery: randomMastery,
                lastReviewed: now,
                nextReview,
            },
        });
    }

    console.log(`Created vocabulary progress for user: ${demoUser.id}`);

    // Create question attempts for the demo user
    const questionsFromDb = await prisma.question.findMany();

    for (const question of questionsFromDb) {
        // Randomly determine if the answer was correct
        const isCorrect = Math.random() > 0.2; // 80% correct rate

        // Random time taken between a reasonable range
        const timeTaken = Math.floor(Math.random() * 120) + 30; // 30 to 150 seconds

        // Random mode
        const modes: StudyMode[] = ['EXAM', 'PRACTICE', 'REVIEW'];
        const randomMode = modes[Math.floor(Math.random() * modes.length)];

        await prisma.questionAttempt.create({
            data: {
                userId: demoUser.id,
                questionId: question.id,
                userAnswer: question.solution || 'A', // Use the solution or default to 'A'
                isCorrect,
                timeTaken,
                mode: randomMode,
                createdAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)), // Within the last week
            },
        });
    }

    console.log(`Created question attempts for user: ${demoUser.id}`);

    // Create some inspirational quotes
    const quotes: QuoteData[] = [
        {
            content: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            category: QuoteCategory.MOTIVATION,
        },
        {
            content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            category: QuoteCategory.SUCCESS,
        },
        {
            content: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
            author: "Dr. Seuss",
            category: QuoteCategory.LEARNING,
        },
        {
            content: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius",
            category: QuoteCategory.PERSEVERANCE,
        },
        {
            content: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
            category: QuoteCategory.MOTIVATION,
        },
    ];

    for (const quote of quotes) {
        await prisma.quote.create({
            data: {
                content: quote.content,
                author: quote.author,
                category: quote.category,
            },
        });
    }

    console.log(`Created ${quotes.length} inspirational quotes`);

    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 