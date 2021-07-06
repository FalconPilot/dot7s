import * as React from 'react'

import { AdminRoute } from '$front/admin/store/types'
import { useAppDispatch } from '$front/admin/utils'
import { actions } from '$front/admin/store/actions'

import { CardView } from './Card'

export interface CardProps {
  label: string
  to: AdminRoute
}

export const Card: React.FunctionComponent<CardProps> = ({ label, to }) => {
  const dispatch = useAppDispatch()

  const handleClick = React.useCallback((): void => {
    dispatch(actions.routing.setRoute(to))
  }, [dispatch])

  return (
    <CardView
      label={label}
      handleClick={handleClick}
    />
  )
}
