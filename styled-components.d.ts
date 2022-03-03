import { dark } from 'styles/theme'

type Theme = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
