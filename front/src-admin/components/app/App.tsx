import * as React from 'react'

import { AdminRoute } from '$front/admin/store/types'

import { Header } from '../header'
import { Home } from '../home'
import { Weapons } from '../weapons'

export const AppView: React.FunctionComponent<{
  currentPath: AdminRoute
}> = ({
  currentPath
}) => {
  // Match route with component
  const MainComponent: React.FunctionComponent = {
    [AdminRoute.Home]: Home,
    [AdminRoute.Weapons]: Weapons
  }[currentPath]

  return (
    <>
      <Header />
      <main>
        <MainComponent />
      </main>
    </>
  )
}
