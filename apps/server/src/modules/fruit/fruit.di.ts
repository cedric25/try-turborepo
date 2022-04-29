import type { FruitDao } from '@/modules/fruit/dao/fruit.dao'

type DependencyKey = 'fruitDao'

type Dependency = FruitDao | undefined

const fruitDependencies: Record<DependencyKey, Dependency> = {
  fruitDao: undefined,
}

function register(dependencyKey: DependencyKey, dependency: any): void {
  fruitDependencies[dependencyKey] = dependency
}

function resolve(dependencyKey: DependencyKey): any {
  return fruitDependencies[dependencyKey]
}

// /!\ Only exposed to ease checking that all deps have well been initialized
function getAllDependencies() {
  return fruitDependencies
}

export const fruitDi = {
  register,
  resolve,
  getAllDependencies,
}
