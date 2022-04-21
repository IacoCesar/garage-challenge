import styled from 'styled-components/native'
import { IThemeProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = styled(SafeAreaView)<IThemeProps>`
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].background};
  display: flex;
  width: 100%;
  height: 100%;
`

export default {
  Content
}
