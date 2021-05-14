import * as envalid from 'envalid'

import { BackEnv, NodeEnv } from '$back/types'

import { isNodeEnv } from './typeguards'

const nodeEnvValidator = envalid.makeValidator((x: unknown): NodeEnv => {
  if (!isNodeEnv(x)) {
    throw new Error(`Value "${x}" is not a valid NodeEnv`)
  }
  return x
})

export const parseEnv = (rawEnv: unknown): BackEnv => envalid.cleanEnv<BackEnv>(rawEnv, {
  NODE_ENV: nodeEnvValidator(),
  PORT: envalid.num()
})
