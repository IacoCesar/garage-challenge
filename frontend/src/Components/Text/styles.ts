import styled from 'styled-components/native'
import { ITextProps } from './types'

const Content = styled.View`
  display: flex;
`

const Text = styled.Text<ITextProps>`
  font-size: ${({ fontSize }) => fontSize || `12px`};
  color: ${({ theme, color }) => color || theme.standard.darkMode.textColor};
  ${({ isBold }) => isBold && `font-weight: bold;`};
`

export default {
  Text,
  Content
}
