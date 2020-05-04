import { createGlobalStyle } from "styled-components"
import FontFaces from "./fonts"
import theme from "./theme"
const { colors, fonts } = theme

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  * {
    font-family: Alcubierre;
  }
  body {
    background: ${colors.nord1};
  }
`
export default GlobalStyle
