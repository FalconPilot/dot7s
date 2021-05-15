import { PrismaClient } from '@prisma/client'
import { Express } from 'express'

import { BackEnv } from './env'

export type RouterFunction = (
  app: Express,
  env: BackEnv,
  prisma: PrismaClient
) => void
