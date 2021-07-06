import { adminReducer } from '$front/admin/utils/redux'
import { updateState } from '$front/common/utils'
import { RoutingAction, routingNamespace } from '../actions/routing'

import { AdminRoute, AppAction, RoutingState } from '../types'

const initialState: RoutingState = {
  currentPath: AdminRoute.Home
}

const isRoutingAction = (x: AppAction): x is RoutingAction =>
  x.namespace === routingNamespace

export default adminReducer<
  RoutingState,
  RoutingAction
>(initialState, isRoutingAction, (state, action) => {
  switch (action.type) {
    case 'ROUTING/SET_ROUTE': return updateState<RoutingState>([
      { currentPath: action.payload }
    ])(state)
  }
})
