import * as Either from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { RouterFunction, WeaponBodyCodec } from '$back/types'

export const weaponsRouter: RouterFunction = (app, env, client) => {
  // [GET] All weapons
  app.get('/weapons', async (req, res) => {
    const weapons = await client.weapon.findMany()

    res.json(weapons)
  })

  // [POST] One weapon
  app.post('/weapons', async (req, res) => {
    const weapon = await pipe(
      WeaponBodyCodec.decode(req.body),
      Either.mapLeft(err => {
        console.log()
        return err
      }),
      Either.matchW(
        err => err,
        body => client.weapon.create({ data: body })
      )
    )
  })
}
