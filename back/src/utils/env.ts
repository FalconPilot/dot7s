import * as envalid from 'envalid'

import { BackEnv } from '$back/types'
import { isNodeEnv, NodeEnv } from '$common/types'

const nodeEnvValidator = envalid.makeValidator((x: unknown): NodeEnv => {
  if (!isNodeEnv(x)) {
    throw new Error(`Value "${x}" is not a valid NodeEnv`)
  }
  return x
})

export const parseEnv = (rawEnv: unknown): BackEnv => envalid.cleanEnv<BackEnv>(rawEnv, {
  DATABASE_URL: envalid.str(),
  NODE_ENV: nodeEnvValidator(),
  PORT: envalid.num()
})
