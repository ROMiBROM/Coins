import { PrismaClient } from '@prisma/client'

//const globalForPrisma = globalThis as { prisma: PrismaClient }

declare global {
    var prisma: PrismaClient | undefined;
  }

export const prisma = global.prisma || new PrismaClient();

//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
