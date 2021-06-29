import { store } from '../core'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
