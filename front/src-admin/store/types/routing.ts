export enum AdminRoute {
  Home = '/',
  Weapons = '/weapons'
}

export interface RoutingState {
  currentPath: AdminRoute
}
