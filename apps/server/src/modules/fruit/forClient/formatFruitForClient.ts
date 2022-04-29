import type { Fruit } from '@prisma/client'

// To de-correlate DB entity from our model entity
export interface FruitForClient {
  name: string
  color: string
}

export function formatFruitsForClient(fruits: Fruit[]): FruitForClient[] {
  return fruits.map(formatFruitForClient)
}

export function formatFruitForClient(fruit: Fruit) {
  return {
    name: fruit.name,
    color: fruit.color,
  }
}
