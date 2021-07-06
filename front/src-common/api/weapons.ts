import * as t from 'io-ts'

import { WeaponCodec } from '$back/codecs'
import { Weapon } from '$back/types'
import { API } from '$common/utils/api'

export const getWeapons = (): Promise<Weapon[]> =>
  API.get('/weapons', t.array(WeaponCodec))
    .execute()
