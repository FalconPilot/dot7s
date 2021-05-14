import { RouterFunction } from '$back/types'

import { rootRouter } from './root'

export const appRouter: RouterFunction = (app, env) => {
  rootRouter(app, env)
}
