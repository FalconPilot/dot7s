import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'

import rootSaga from '$front/admin/store/sagas'

import gameDataReducer from './reducers/gameData'
import routingReducer from './reducers/routing'
import { AppAction, AppState } from './types'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore<AppState, AppAction, unknown, any>(
  combineReducers({
    gameData: gameDataReducer,
    routing: routingReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
