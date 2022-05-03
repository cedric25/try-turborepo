import 'module-alias/register'

import app from './app/app'

const server = app()

const PORT = process.env.PORT || 3000

server.listen(PORT, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
