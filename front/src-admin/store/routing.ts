import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AdminRoute, RoutingState } from './types'

const initialState: RoutingState = {
  currentPath: AdminRoute.Home
}

const setRoute: CaseReducer<
  RoutingState,
  PayloadAction<AdminRoute>
> = (
  state,
  action
) => ({
  ...state,
  currentPath: action.payload
})

export default createSlice({
  name: 'routing',
  initialState,
  reducers: {
    setRoute
  }
})
