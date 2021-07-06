import { isEnum } from '$common/utils/types'
import { ValuesOf } from '$front/app/types'

export enum AdminRoute {
  Home = '/',
  Weapons = '/weapons'
}

export interface RoutingState {
  currentPath: AdminRoute
}

export const isAdminRoute = isEnum(AdminRoute)
