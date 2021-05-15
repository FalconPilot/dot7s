import * as express from 'express'
import * as path from 'path'

import { log, parseEnv } from '$back/utils'
import { appRouter } from '$back/router'
import { BackEnv } from '$back/types'
import { PrismaClient } from '@prisma/client'

// Parse env and initialize app
const env: BackEnv = parseEnv(process.env)
const app = express()

// Configure view engine
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '..', 'static', 'views'))

const client = new PrismaClient()

// Apply router
appRouter(app, env, client)

// Start server
app.listen(env.PORT, () => {
  log(`DOT7S server listening on port ${env.PORT} !`)
})
