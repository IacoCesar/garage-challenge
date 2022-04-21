import styled from 'styled-components/native'
import { IProps } from './types'

const Spacer = styled.View<IProps>`
  flex-grow: 1;
  ${({ min }) => min && `min-height: ${min}px`};
  ${({ max }) => max && `max-height: ${max}px`};
`

export default { Spacer }
