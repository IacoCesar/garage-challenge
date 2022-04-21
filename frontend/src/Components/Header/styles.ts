import styled from 'styled-components/native'
import { IProps } from './types'

const Container = styled.View<IProps>`
  display: flex;
  height: 72px;
  border: 0px solid transparent;
  padding-horizontal: ${({ theme }) => theme.spacing.global.horizontal};
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].background};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const ContentTitle = styled.View<IProps>`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  shadow-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].shadow};
  shadow-offset: 0px 0px;
`

const ButtonLeftItem = styled.TouchableOpacity`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`

const ButtonRightItem = styled.TouchableOpacity`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`

export default {
  Container,
  Content,
  ContentTitle,
  ButtonLeftItem,
  ButtonRightItem
}
