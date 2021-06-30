import * as envalid from 'envalid'

import { BackEnv, isNodeEnv, NodeEnv } from '$back/types'

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
