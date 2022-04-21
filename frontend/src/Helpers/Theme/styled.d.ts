import 'styled-components/native'
import { IDefaultTheme } from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
