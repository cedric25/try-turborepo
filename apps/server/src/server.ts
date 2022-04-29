import 'module-alias/register'

import app from './app/app'

const fastify = app()

const port = process.env.PORT || 3000

// server.listen(port, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`Server listening at ${address}`)
// })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
    // @ts-ignore
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
