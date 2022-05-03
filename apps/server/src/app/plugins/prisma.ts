import plugin from 'fastify-plugin'
import { PrismaClient } from 'freely-prisma'

export const prismaClient: PrismaClient = new PrismaClient()

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient
  }
}

export default plugin(async instance => {
  instance.decorate('db', prismaClient)
})
