export interface IPayloadProps {
  id: string
  model: string
  make: string
  year: number
  image: {
    url: string
  }
}

export interface IVitrineState {
  vitrineItemSelector: IPayloadProps
}
