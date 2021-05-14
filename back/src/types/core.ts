import { Express } from 'express'

import { BackEnv } from './env'

export type RouterFunction = (app: Express, env: BackEnv) => void
