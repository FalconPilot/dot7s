import * as React from 'react'

import { CardWrapper } from './styled'

export const CardView: React.FunctionComponent<{
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
