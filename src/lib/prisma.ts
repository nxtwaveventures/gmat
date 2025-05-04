import { PrismaClient } from '../generated/prisma';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Create a single PrismaClient instance
export const prisma = new PrismaClient({
    log: ['query', 'error', 'warn'],
}); 