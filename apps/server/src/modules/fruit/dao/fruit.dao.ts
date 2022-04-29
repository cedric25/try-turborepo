import type { Prisma, PrismaPromise, PrismaClient, Fruit } from '@prisma/client'

export class FruitDao {
  #fruit

  constructor({ fruit }: { fruit: PrismaClient['fruit'] }) {
    this.#fruit = fruit
  }

  findAllFruits(): PrismaPromise<Fruit[]> {
    return this.#fruit.findMany()
  }

  createOneFruit({
    data,
  }: {
    data: Prisma.FruitCreateInput
  }): PrismaPromise<Fruit> {
    return this.#fruit.create({
      data,
    })
  }

  deleteOneFruit({ name }: { name: string }): PrismaPromise<Fruit> {
    return this.#fruit.delete({
      where: {
        name,
      },
    })
  }
}
