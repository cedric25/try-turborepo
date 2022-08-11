import { createTRPCClient } from '@trpc/client'
import type { AppRouter } from '../../../bo-server/src/router/index'

const client = createTRPCClient<AppRouter>({
  url: 'http://localhost:3011/trpc',
})

export async function callStuff() {
  const helloResponse = await client.query('hello', {
    username: 'Plof',
  })

  console.log('helloResponse', helloResponse)
}

export function goCreateFruit() {
  return client.mutation('create', {
    name: 'Banana',
    color: 'Yellow',
  })
}

export function goListFruits() {
  return client.query('list-fruits')
}
