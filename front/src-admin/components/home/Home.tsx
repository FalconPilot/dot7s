import * as React from 'react'

import { Card, CardProps } from './Card'

const HomeView: React.FunctionComponent<{
  cards: CardProps[]
}> = ({
  cards
}) => {
  return (
    <div>
      {cards.map(cardProps => (
        <Card
          key={`home-card-${cardProps.to}`}
          {...cardProps}
        />
      ))}
    </div>
  )
}

export default HomeView
