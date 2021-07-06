import { all } from 'redux-saga/effects'

import coreSagas from './core'
import gameDataSagas from './gameData'
import routingSagas from './routing'

export default function * rootSaga () {
  yield all([
    coreSagas(),
    gameDataSagas(),
    routingSagas()
  ])
}
