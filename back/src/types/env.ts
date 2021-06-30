export type NodeEnv = 'development' | 'production'

export interface BackEnv {
  NODE_ENV: NodeEnv
  PORT: number
}

export const isNodeEnv = (x: unknown): x is NodeEnv =>
  typeof x === 'string' && [
    'development',
    'production'
  ].includes(x)
