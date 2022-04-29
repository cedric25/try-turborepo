import { Prisma, type Fruit } from '@prisma/client'
import type { FruitDao } from '@/modules/fruit/dao/fruit.dao'
import { fruitDi } from '@/modules/fruit/fruit.di'

export async function createFruitUseCase({
  name,
  color,
}: {
  name: string
  color: string
}): Promise<Fruit> {
  // Entity for db
  const fruitForDb: Prisma.FruitCreateInput = {
    name,
    color,
  }

  // Get corresponding DAO
  const fruitDao: FruitDao = fruitDi.resolve('fruitDao')

  try {
    // Save to db
    return await fruitDao.createOneFruit({ data: fruitForDb })

    // --- Q? Return answer from db or return entity?
    // await fruitDao.create({ data: fruitForDb })
    // return fruitEntity
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      // It'd be better to use an enum here...
      // https://github.com/prisma/prisma/issues/5040
      err.code === 'P2002'
    ) {
      throw new Error('This fruit already exist.')
    }
    throw err
  }
}
