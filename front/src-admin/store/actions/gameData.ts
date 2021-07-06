import { Weapon } from '$back/types'
import { ValuesOf, ValuesOfArray } from '$front/app/types'
import { lifecycleActions } from '$front/common/utils'

export const gameDataNamespace = 'GAMEDATA'
const namespace = gameDataNamespace

const gameDataRootActions = {
  reset: () => ({
    namespace,
    type: `${gameDataNamespace}/RESET`
  }) as const
}

const gameDataSubActions = {
  weapons: lifecycleActions(gameDataNamespace, 'WEAPONS')<Weapon[]>()
}

export const gameDataActions = {
  ...gameDataRootActions,
  ...gameDataSubActions
}

const flattenedNamespacedActions = Object.values(gameDataSubActions)

export type GameDataAction =
  | ReturnType<ValuesOf<typeof gameDataRootActions>>
  | ReturnType<ValuesOf<ValuesOfArray<typeof flattenedNamespacedActions>>>

export type GameDataActionType = GameDataAction['type']
