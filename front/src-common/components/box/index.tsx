import styled from 'styled-components'

import { maybeCSS } from '$front/common/utils'

export interface BoxProps {
  $flex?: boolean
}

export const Box = styled.div<BoxProps>`
  ${maybeCSS<BoxProps>('display', 'flex', p => !!p.$flex)}
`
