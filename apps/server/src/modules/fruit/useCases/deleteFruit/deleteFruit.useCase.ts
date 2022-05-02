import { notFound } from '@hapi/boom'
import { Prisma, type Fruit, type Toto } from 'freely-prisma'
import type { FruitDao } from '@/modules/fruit/dao/fruit.dao'
import { fruitDi } from '@/modules/fruit/fruit.di'

export async function deleteFruitUseCase({
  name,
}: {
  name: string
}): Promise<Fruit> {
  // Get corresponding DAO
  const fruitDao: FruitDao = fruitDi.resolve('fruitDao')

  try {
    return await fruitDao.deleteOneFruit({ name })
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      // It'd be better to use an enum here...
      // https://github.com/prisma/prisma/issues/5040
      err.code === 'P2025'
    ) {
      throw notFound("This fruit doesn't exist", { name })
    }
    throw err
  }
}
