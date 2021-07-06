import { codecFromType } from '$common/utils'
import { Weapon } from '.prisma/client'
import * as t from 'io-ts'

export const WeaponCodec = codecFromType<Weapon>()({
  id: t.number,
  minDamage: t.number,
  maxDamage: t.number,
  weaponClassId: t.number,
  nameFR: t.string,
  descriptionFR: t.string
})
