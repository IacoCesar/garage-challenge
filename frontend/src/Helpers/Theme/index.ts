import { DefaultTheme } from 'styled-components/native'

export const commonThemes = {
  colors: {
    bgWhite: '#EFEDEE',
    white: '#FFFF',
    black: '#000000',
    cardColor: '#ffffff',
    starColor: '#F9E26B',
    divisorColor: '#9F9F9F'
  },
  spacing: {
    global: {
      horizontal: 16
    }
  }
}

export const theme: DefaultTheme = {
  standard: {
    darkMode: {
      icon: commonThemes.colors.white,
      divisor: commonThemes.colors.bgWhite,
      shadow: commonThemes.colors.white,
      card: commonThemes.colors.divisorColor,
      cardTextColor: commonThemes.colors.black,
      background: commonThemes.colors.black,
      textColor: commonThemes.colors.white,
      ...commonThemes
    },
    default: {
      icon: commonThemes.colors.black,
      divisor: commonThemes.colors.divisorColor,
      shadow: commonThemes.colors.black,
      card: commonThemes.colors.cardColor,
      cardTextColor: commonThemes.colors.black,
      background: commonThemes.colors.white,
      textColor: commonThemes.colors.black,
      ...commonThemes
    }
  },
  ...commonThemes
}
