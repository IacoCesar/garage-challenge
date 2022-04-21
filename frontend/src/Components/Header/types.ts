export interface IHeader {
  testID?: string
  isHomeScreen?: boolean
  title?: string
  callHandleBack?: (navigation: any) => void
  callHandleChangeVisualMode?: (themeSelector: string) => void
}

export interface IProps extends IHeader {
  themeSelector: string
}
