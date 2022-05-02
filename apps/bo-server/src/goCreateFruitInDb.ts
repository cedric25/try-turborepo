import { PrismaClient } from 'freely-prisma'

const prismaClient: PrismaClient = new PrismaClient()

export function goCreateFruitInDb({
  name,
  color,
}: {
  name: string
  color: string
}) {
  return prismaClient.fruit.create({
    data: {
      name,
      color,
    },
  })
}
