import { AdminRoute } from '$front/admin/store/types'
import { ValuesOf } from '$front/app/types'

export const routingNamespace = 'ROUTING'
const namespace = routingNamespace

export const routingRootActions = {
  setRoute: (route: AdminRoute) => ({
    namespace,
    type: `${namespace}/SET_ROUTE`,
    payload: route
  })as const
}

export const routingActions = {
  ...routingRootActions
}

export type RoutingAction = ReturnType<ValuesOf<typeof routingRootActions>>

export type RoutingActionType = RoutingAction['type']
