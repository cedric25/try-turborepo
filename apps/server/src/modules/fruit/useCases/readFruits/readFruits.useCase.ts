import { fruitDi } from '@/modules/fruit/fruit.di'
import type { FruitDao } from '@/modules/fruit/dao/fruit.dao'
import {
  type FruitForClient,
  formatFruitsForClient,
} from '@/modules/fruit/forClient/formatFruitForClient'

export async function readFruitsUseCase(): Promise<{
  fruits: FruitForClient[]
}> {
  // Get corresponding DAO
  const fruitDao: FruitDao = fruitDi.resolve('fruitDao')

  // DB query
  const fruits = await fruitDao.findAllFruits()

  // De-correlate what we send back to client from DB entities
  const fruitsForClient = formatFruitsForClient(fruits)

  return {
    fruits: fruitsForClient,
  }
}
