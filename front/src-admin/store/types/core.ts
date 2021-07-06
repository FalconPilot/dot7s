import { GameDataAction, GameDataActionType } from '$front/admin/store/actions/gameData'
import { RoutingAction, RoutingActionType } from '$front/admin/store/actions/routing'
import { Dispatch } from 'react'

import { GameDataState } from './gameData'
import { RoutingState } from './routing'

export interface AppState {
  gameData: GameDataState
  routing: RoutingState
}

export type AppAction =
  | GameDataAction
  | RoutingAction

export type AppActionType =
  | GameDataActionType
  | RoutingActionType

export type AppDispatch = Dispatch<AppAction>
