import * as React from 'react'

import { AdminRoute } from '$front/admin/store/types'
import { useAppDispatch } from '$front/admin/utils'
import { actions } from '$front/admin/store'

import CardView from './Card'

export interface CardProps {
  label: string
  to: AdminRoute
}

const Card: React.FunctionComponent<CardProps> = ({ label, to }) => {
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

export default Card
