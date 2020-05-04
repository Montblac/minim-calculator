import { css } from "styled-components"
import Alcubierre from "@fonts/Alcubierre.otf"

const FontFaces = css`
  @font-face {
    font-family: "Alcubierre";
    src: url(${Alcubierre}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
`

export default FontFaces
