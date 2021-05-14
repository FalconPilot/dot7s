import { NodeEnv } from '$back/types'

export const isNodeEnv = (x: unknown): x is NodeEnv =>
  typeof x === 'string' && [
    'development',
    'production'
  ].includes(x)
