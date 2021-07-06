import * as TaskEither from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { RouterFunction, WeaponBodyCodec } from '$back/types'
import { asyncRenderJson, asyncRoute, database, decode } from '$back/utils'

export const weaponsRouter: RouterFunction = (app, env, client) => {
  // [GET] All weapons
  app.get('/weapons', asyncRoute(async (req, res) => {
    asyncRenderJson(res)(
      database.query('Weapons')(() => client.weapon.findMany())()
    )
  }))

  // [POST] One weapon
  app.post('/weapons', asyncRoute(async (req, res) => {
    asyncRenderJson(res)(pipe(
      decode('Weapons')(WeaponBodyCodec)(req.body),
      TaskEither.fromEither,
      TaskEither.chain(
        database.query('Weapons')(body => client.weaponClass.create({ data: body }))
      )
    ))
  }))
}
