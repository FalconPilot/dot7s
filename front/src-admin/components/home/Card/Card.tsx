import * as React from 'react'

import { CardWrapper } from './styled'

const CardView: React.FunctionComponent<{
  label: string
  handleClick: () => void
}> = ({
  label,
  handleClick
}) => {
  return (
    <CardWrapper>
      <button onClick={handleClick}>{label}</button>
    </CardWrapper>
  )
}

export default CardView
