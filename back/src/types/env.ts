export type NodeEnv = 'development' | 'production'

export interface BackEnv {
  NODE_ENV: NodeEnv
  PORT: number
}
