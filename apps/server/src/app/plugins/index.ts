import plugin from 'fastify-plugin'
import helmet from 'fastify-helmet'
import sensible from 'fastify-sensible'
import { isBoom } from '@hapi/boom'
import prisma from './prisma'

export default plugin(async instance => {
  instance.register(helmet)
  instance.register(sensible, { errorHandler: false })
  instance.register(prisma)

  instance.setErrorHandler((err, _, reply) => {
    // @ts-ignore
    if (!err.logged) {
      console.error(err)
    }
    if (isBoom(err)) {
      reply.send({
        ...err.output.payload,
        data: err.data,
      })
    }
    reply.send(err)
  })
})
