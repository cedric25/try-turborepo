import { PrismaClient } from 'freely-prisma'

const prismaClient: PrismaClient = new PrismaClient()

export function goListFruitsInDb() {
  return prismaClient.fruit.findMany()
}
