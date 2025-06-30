
import { PrismaClient } from '@prisma/client';

declare global {
  var __db__: PrismaClient | undefined;
}

export const db = globalThis.__db__ ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalThis.__db__ = db;
}


export const connectDatabase = async (): Promise<void> => {
  try {
    await db.$connect();
    console.log('DB Connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};


export const disconnectDatabase = async (): Promise<void> => {
  try {
    await db.$disconnect();
    console.log('DB disconnected successfully');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
  }
};