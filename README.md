# PrepMaster - GMAT/GRE Preparation Platform

A comprehensive web application for GMAT and GRE preparation with interactive learning features, progress tracking, and performance analytics.

## Features

- **GMAT & GRE Preparation**
  - Practice questions for all exam sections
  - Multiple study modes (Study Mode & Exam Mode)
  - Comprehensive explanations with each question
  - Full-length practice tests with timing

- **Vocabulary Builder**
  - Intelligent flashcard system with spaced repetition
  - Word lists organized by difficulty and frequency
  - Word games for reinforcement
  - Progress tracking for vocabulary mastery

- **Analytics Dashboard**
  - Track performance across different sections
  - Identify strengths and weaknesses
  - Monitor study time and progress
  - Get personalized practice recommendations

- **Beautiful UI/UX**
  - Modern, responsive design
  - Inspirational quotes to keep motivated
  - Smooth animations and transitions
  - Excellent readability and accessibility

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Deployment**: Vercel (frontend), Supabase (database)

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/gmat-gre-app.git
   cd gmat-gre-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/gmat_gre_db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. Set up the database
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
/gmat-gre-app
  /src
    /app              # Next.js App Router structure
      /api            # API routes
      /dashboard      # Dashboard pages
      /gmat           # GMAT pages
      /gre            # GRE pages
      /vocabulary     # Vocabulary pages
      /auth           # Authentication
    /components       # Reusable components
      /ui             # UI components
      /dashboard      # Dashboard components
      /exam           # Exam mode components
      /study          # Study mode components
      /vocabulary     # Vocabulary components
      /layout         # Layout components
    /lib              # Utilities and helpers
    /prisma           # Database schemas
  /public             # Static files
  /prisma             # Prisma configuration
```

## Deployment

The application can be easily deployed to Vercel:

```bash
npm run build
# or
vercel
```

For the database, you can use Supabase, Neon, or any other PostgreSQL provider.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Official GMAT and GRE test materials for reference
- The open-source community for the amazing tools and libraries
