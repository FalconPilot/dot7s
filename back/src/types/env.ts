import { NodeEnv } from '$common/types'

export interface BackEnv {
  DATABASE_URL: string
  NODE_ENV: NodeEnv
  PORT: number
}
