import fastify, { FastifyInstance } from 'fastify'
import plugins from './plugins/index'
import routes from './routes'

export default (): FastifyInstance => {
  const app = fastify({
    // ignoreTrailingSlash: true,
    // disableRequestLogging: true,
    // logger,
    // genReqId,
  })

  app.register(plugins)

  app.get('/', async () => {
    return 'Hello from my-turborepo/apps/server 👋'
  })

  app.register(routes, { prefix: '/api' })

  return app
}
