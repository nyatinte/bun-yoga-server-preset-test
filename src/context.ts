import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export type GraphQLContext = {
  prisma: PrismaClient;
};

export function createContext(): GraphQLContext {
  return {
    prisma,
  };
}
