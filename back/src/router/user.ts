import * as TaskEither from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { RouterFunction } from '$back/types'

import {
  asyncRenderJson,
  asyncRoute,
  database,
  validateId
} from '$back/utils'

export const userRouter: RouterFunction = (app, env, client) => {
  // [GET] All users
  app.get('/users', asyncRoute(async (req, res) => {
    await asyncRenderJson(res)(
      database.query('Users')(() => client.user.findMany())()
    )
  }))

  // [GET] One user
  app.get('/users/:id', asyncRoute(async (req, res) => {
    await asyncRenderJson(res)(pipe(
      validateId('userId')(req.params.id),
      TaskEither.fromEither,
      TaskEither.chain(
        database.queryStrict('User')(id => client.user.findUnique({
          where: { id }
        }))
      )
    ))
  }))
}
