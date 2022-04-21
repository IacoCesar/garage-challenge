export interface IFavoriteCarProps {
  carId: string
}

export interface IRenderItemProps {
  item: {
    id: string
    model: string
    make: string
    year: number
    image: {
      url: string
    }
  }
  index: number
}

export interface IProps {
  testID?: string
  isLoading: boolean
  vitrineData: object[]
  favoriteCarsData: IFavoriteCarProps[]
  callHandleOpenPdp: (item: object) => void
  callHandleFavoriteCar: (id: string) => void
  callHandleUnFavoriteCar: (id: string) => void
  callLoadVitrineData: () => void
}

export interface IThemeProps {
  themeSelector: string
}
