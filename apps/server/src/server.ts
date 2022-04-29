import 'module-alias/register'

import app from './app/app'

const fastify = app()

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080, '0.0.0.0')
    // @ts-ignore
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
