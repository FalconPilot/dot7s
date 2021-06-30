import { all, fork } from 'redux-saga/effects'

import { select } from '$common/utils/saga'

function * init () {
  yield * select(state => state.routing.currentPath)
}

export default function * coreSagas () {
  yield all([
    fork(init)
  ])
}
