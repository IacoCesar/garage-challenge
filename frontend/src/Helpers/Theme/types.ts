interface ICommonTheme {
  colors: {
    bgWhite: string
    white: string
    black: string
    cardColor: string
    starColor: string
    divisorColor: string
  }
  spacing: {
    global: {
      horizontal: number
    }
  }
}

export interface IPallete {
  icon: string
  divisor: string
  shadow: string
  card: string
  cardTextColor: string
  background: string
  textColor: string
}

interface IModes {
  darkMode: IPallete
  default: IPallete
}

export interface IDefaultTheme extends ICommonTheme {
  standard: {
    [key: string]: IModes['darkMode' | 'default']
  }
}
