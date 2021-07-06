import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<{
  radius: number
}>`
  width: ${p => p.radius}px;
  height: ${p => p.radius}px;
  animation: ${spin} ease-in-out infinite 1s;
  border: 2px solid #CCC;
  border-top-color: #333;
  border-radius: 50%;
`
