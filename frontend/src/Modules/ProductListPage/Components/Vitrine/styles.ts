import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import VirtualizedScrollView from '@/Components/VirtualizedScrollView'
import { IThemeProps } from './types'

const screenW = Dimensions.get('screen').width

const Content = styled(VirtualizedScrollView)``

const List = styled.FlatList`
  padding-horizontal: ${({ theme }) => theme.spacing.global.horizontal};
`

const ContentListItem = styled.TouchableOpacity<IThemeProps>`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].card};
`

const ContentListImage = styled.Image<IThemeProps>`
  display: flex;
  width: 100%;
  height: ${(screenW * 9) / 16};
  background-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].divisor};
`

const ContentListInfo = styled.View`
  display: flex;
  flex-direction: column;
`

const ContentListInfoTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.spacing.global.horizontal};
`

const ContentListInfoTopDesc = styled.View`
  display: flex;
  flex-direction: row;
`

const ContentListInfoTopStar = styled.TouchableOpacity`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

const ContentListHr = styled.View<IThemeProps>`
  display: flex;
  width: 100%;
  border-width: 2px;
  border-color: ${({ theme, themeSelector }) =>
    theme.standard[themeSelector].divisor};
`

const ContentListInfoBot = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.spacing.global.horizontal};
`

const ContentListInfoBotDesc = styled.View`
  display: flex;
  align-items: center;
`

export default {
  Content,
  List,
  ContentListItem,
  ContentListHr,
  ContentListImage,
  ContentListInfo,
  ContentListInfoTop,
  ContentListInfoTopDesc,
  ContentListInfoTopStar,
  ContentListInfoBot,
  ContentListInfoBotDesc
}
