import * as Either from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { APIError, RouterFunction } from '$back/types'
import { renderErrorJson, validateNumeric } from '$back/utils'

export const userRouter: RouterFunction = (app, env, client) => {
  // [GET] One user
  app.get('/users/:id', async (req, res) => {
    const result = await pipe(
      validateNumeric('userId')(req.params.id),
      Either.matchW(
        err => err,
        async id => await client.user.findUnique({
          where: { id }
        }).then(user => user ?? new APIError({
          code: 404,
          message: 'User not found'
        }))
      ),
    )

    if (result instanceof Error) {
      return renderErrorJson(res, result.options)
    }

    res.json(result)
  })
}
