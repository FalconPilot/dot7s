import { RouterFunction } from '$back/types'

import { rootRouter } from './root'
import { userRouter } from './user'
import { weaponsRouter } from './weapons'

export const appRouter: RouterFunction = (app, env, client) => {
  rootRouter(app, env, client)
  userRouter(app, env, client)
  weaponsRouter(app, env, client)
}
