import * as React from 'react'

import { useAppStore } from '$front/admin/utils'

import { AppView } from './App'

export const App: React.FunctionComponent = () => {
  const currentPath = useAppStore(state => state.routing.currentPath)

  return (
    <AppView currentPath={currentPath} />
  )
}

