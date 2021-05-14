import * as express from 'express'

import { log, parseEnv } from '$back/utils'
import { appRouter } from '$back/router'
import { BackEnv } from '$back/types'

// Parse env and initialize app
const env: BackEnv = parseEnv(process.env)
const app = express()

// Apply router
appRouter(app, env)

// Start server
app.listen(env.PORT, () => {
  log(`DOT7S server listening on port ${env.PORT} !`)
})
