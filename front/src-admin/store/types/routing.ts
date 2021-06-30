import { isEnum } from '$common/utils/types'

export enum AdminRoute {
  Home = '/',
  Weapons = '/weapons'
}

export interface RoutingState {
  currentPath: AdminRoute
}

export const isAdminRoute = isEnum(AdminRoute)
