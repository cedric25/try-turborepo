import type { FastifyInstance, FastifyPluginCallback } from 'fastify'
import { FruitDao } from '@/modules/fruit/dao/fruit.dao'
import { fruitDi } from '@/modules/fruit/fruit.di'
import { readFruitsRoute } from '@/modules/fruit/useCases/readFruits/readFruits.handler'
import { createFruitRoute } from '@/modules/fruit/useCases/createFruit/createFruit.handler'
import { deleteFruitRoute } from '@/modules/fruit/useCases/deleteFruit/deleteFruit.handler'

export const fruitRoutes: FastifyPluginCallback = async instance => {
  initFruitModule(instance)

  instance.route(readFruitsRoute)
  instance.route(createFruitRoute)
  instance.route(deleteFruitRoute)
}

function initFruitModule(instance: FastifyInstance) {
  const { fruit } = instance.db

  const fruitDao: FruitDao = new FruitDao({ fruit })
  fruitDi.register('fruitDao', fruitDao)

  // Check that all services are well instantiated
  const allDependencies = fruitDi.getAllDependencies()
  for (const [dependencyKey, dependency] of Object.entries(allDependencies)) {
    if (!dependency) {
      throw new Error(
        `Could not instantiate 'fruit' module dependency: ${dependencyKey}`
      )
    }
  }
}
