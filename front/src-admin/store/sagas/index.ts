import { all } from 'redux-saga/effects'

import coreSagas from './core'

export default function * rootSaga () {
  yield all([
    coreSagas()
  ])
}
