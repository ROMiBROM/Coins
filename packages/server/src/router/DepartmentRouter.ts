//import { prisma } from '../lib/prismaClient'
import { trpc } from '../lib/trpc'
import { z } from 'zod'

export const departmentRouter = trpc.router({
    list: trpc.procedure.query(() => {
      return prisma;
    })
  });