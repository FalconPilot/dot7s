import { Weapon } from '$back/types'
import { DataWithLifecycle } from '$front/common/types'

export interface GameDataState {
  weapons: DataWithLifecycle<Weapon[]>
}
