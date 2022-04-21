export interface ITextProps {
  color?: string
  fontSize?: number
  isBold?: boolean
}

export interface IProps extends ITextProps {
  label: string
  testID?: string
}
