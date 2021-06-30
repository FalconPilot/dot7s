import * as t from 'io-ts'

export const WeaponBodyCodec = t.type({
  minDamage: t.number,
  maxDamage: t.number,
  weaponClassId: t.number,
  // Localization
  nameFR: t.string,
  descriptionFR: t.string
})

export type WeaponBody = t.TypeOf<typeof WeaponBodyCodec>
