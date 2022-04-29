import { PrismaClient } from '@prisma/client'

export const prismaClient: PrismaClient = new PrismaClient()

export * from '@prisma/client';
