import type { HTTPMethods } from 'fastify'
import type { FruitForClient } from '@/modules/fruit/forClient/formatFruitForClient'
import { readFruitsUseCase } from '@/modules/fruit/useCases/readFruits/readFruits.useCase'

export const readFruitsRoute = {
  // 'GET' here to ease tests directly from browser
  method: 'GET' as HTTPMethods,
  url: '/',
  async handler(): Promise<{ fruits: FruitForClient[] }> {
    // Call use-case
    const { fruits } = await readFruitsUseCase()
    return {
      fruits,
    }
  },
}
