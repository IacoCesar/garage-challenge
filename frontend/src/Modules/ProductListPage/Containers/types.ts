export type IRenderItemProps = {
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
