import * as React from 'react'

import { AdminRoute } from '$front/admin/store/types'

import HomeView from './Home'
import { CardProps } from './Card'

const cards: CardProps[] = [{
  label: 'weapons',
  to: AdminRoute.Weapons
}]

export const Home: React.FunctionComponent = () => {
  return (
    <HomeView />
  )
}
