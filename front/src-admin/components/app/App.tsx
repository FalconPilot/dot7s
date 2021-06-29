import * as React from 'react'

import { AdminRoute } from '$front/admin/store/types'

import { Home } from '../home'

export const AppView: React.FunctionComponent<{
  currentPath: AdminRoute
}> = ({
  currentPath
}) => {
  const MainComponent: React.FunctionComponent = {
    [AdminRoute.Home]: Home
  }[currentPath]
  return (
    <MainComponent />
  )
}
