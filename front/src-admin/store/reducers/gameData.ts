import { adminReducer } from '$front/admin/utils/redux'
import { lifecycle, updateState } from '$front/common/utils'
import { GameDataAction, gameDataNamespace } from '$front/admin/store/actions/gameData'

import { AppAction, GameDataState } from '../types'

const initialState: GameDataState = {
  weapons: lifecycle.emptyData()
}

const isGameDataAction = (x: AppAction): x is GameDataAction =>
  x.namespace === gameDataNamespace

export default adminReducer<
  GameDataState,
  GameDataAction
>(initialState, isGameDataAction, (state, action) => {
  switch (action.type) {
    case 'GAMEDATA/RESET': return initialState
    case 'GAMEDATA/WEAPONS/LOADING_START': return updateState<GameDataState>([
      { weapons: lifecycle.startLoading() }
    ])(state)
    case 'GAMEDATA/WEAPONS/LOADING_SUCCESS': return updateState<GameDataState>([
      { weapons: lifecycle.loadingSuccess(action.payload) }
    ])(state)
    case 'GAMEDATA/WEAPONS/LOADING_ERROR': return updateState<GameDataState>([
      { weapons: lifecycle.loadingError(state.weapons.value, action.payload) }
    ])(state)
  }
})
