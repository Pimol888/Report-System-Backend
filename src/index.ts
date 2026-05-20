import { createApp } from './app.js'
import { getEnv } from './config/env.js'

// starts the HTTP server
function main() {
  const { port } = getEnv()
  const app = createApp()

  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
  })
}

main()
