import React from 'react'
import Header from '@/Components/Header'
import RootTranslate from './RootTranslate'
import { IProps } from './types'
import { useDispatch } from 'react-redux'
import { changeTheme } from '@/Redux/Theme'

export const RouteGenerator = ({ isHomeScreen, title }: IProps) => {
  const dispatch = useDispatch()

  const callHandleBack = (navigation: any) => {
    navigation.goBack()
  }

  const callHandleChangeVisualMode = (themeSelector: string) => {
    dispatch(changeTheme(themeSelector === 'darkMode' ? 'default' : 'darkMode'))
  }

  return {
    header: ({ navigation }: any) => {
      return (
        <Header
          callHandleChangeVisualMode={callHandleChangeVisualMode}
          callHandleBack={() => callHandleBack(navigation)}
          isHomeScreen={isHomeScreen}
          title={RootTranslate.pageParse[title] || title}
        />
      )
    }
  }
}
