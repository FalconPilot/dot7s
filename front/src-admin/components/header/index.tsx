import * as React from 'react'

import { actions } from '$front/admin/store/actions'
import { AdminRoute } from '$front/admin/store/types'
import { useAppDispatch, useAppStore } from '$front/admin/utils'

import { HeaderView } from './Header'

export const Header: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const isOnRoot = useAppStore(state => state.routing.currentPath === AdminRoute.Home)

  const backToRoot = React.useCallback((): void => {
    dispatch(actions.routing.setRoute(AdminRoute.Home))
  }, [dispatch])

  return (
    <HeaderView
      isOnRoot={isOnRoot}
      backToRoot={backToRoot}
    />
  )
}
