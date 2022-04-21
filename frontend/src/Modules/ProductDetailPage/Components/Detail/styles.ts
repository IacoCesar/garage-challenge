import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import VirtualizedScrollView from '@/Components/VirtualizedScrollView'
import { IThemeProps } from './types'

const screenW = Dimensions.get('screen').width

const Container = styled(VirtualizedScrollView)``

const Content = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].background};
`

const Image = styled.Image<IThemeProps>`
  display: flex;
  width: 100%;
  height: ${(screenW * 9) / 16};
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].divisor};
`

const ContentInfo = styled.View`
  display: flex;
  flex-direction: column;
  padding-horizontal: ${({ theme }) => theme.spacing.global.horizontal};
`

const ContentTextIdentifier = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-end;
`

const ContentHr = styled.View<IThemeProps>`
  display: flex;
  width: 100%;
  border-width: 2px;
  border-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].divisor};
`

export default {
  Container,
  Content,
  Image,
  ContentInfo,
  ContentTextIdentifier,
  ContentHr
}
