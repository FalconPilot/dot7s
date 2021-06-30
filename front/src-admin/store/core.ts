import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'

import rootSaga from '$front/admin/store/sagas'

import routingSlice from './routing'

export const actions = {
  routing: routingSlice.actions
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    routing: routingSlice.reducer
  },
  middleware: [
    sagaMiddleware
  ]
})

sagaMiddleware.run(rootSaga)
