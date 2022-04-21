import styled from 'styled-components/native'
import { IProps } from './types'

const List = styled.FlatList<IProps>`
  flex: 1;
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].background};
`

export default {
  List
}
