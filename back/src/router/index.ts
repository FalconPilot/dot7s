import { RouterFunction } from '$back/types'

import { rootRouter } from './root'
import { userRouter } from './user'

export const appRouter: RouterFunction = (app, env, client) => {
  rootRouter(app, env, client)
  userRouter(app, env, client)
}
