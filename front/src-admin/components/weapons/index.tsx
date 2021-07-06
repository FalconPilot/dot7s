import * as React from 'react'

import { actions } from '$front/admin/store/actions'
import { LoadingSpinner } from '$front/common/components'
import { useAppDispatch, useAppStore } from '$front/admin/utils'

import WeaponsView from './Weapons'

export const Weapons: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppStore(state => state.gameData.weapons.loading)

  React.useEffect((): void => {
    dispatch(actions.gameData.weapons.startLoading())
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <WeaponsView />
  )
}
