import { all, fork } from 'redux-saga/effects'

import effects from '$front/admin/utils/saga'

function * init () {
  const currentPath = yield * effects.select(state => state.routing.currentPath)
}

export default function * coreSagas () {
  yield all([
    fork(init)
  ])
}
