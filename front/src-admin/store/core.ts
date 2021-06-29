import { configureStore } from '@reduxjs/toolkit'

import routingSlice from './routing'

export const store = configureStore({
  reducer: {
    routing: routingSlice.reducer
  }
})

export const actions = {
  routing: routingSlice.actions
}
