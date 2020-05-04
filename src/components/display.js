import React from "react"
import styled from "styled-components"
import { theme } from "@styles"
const { colors } = theme

const StyledDisplay = styled.div`
  color: ${colors.nord6};
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2rem;
`

const Display = ({ data }) => {
  return <StyledDisplay>{data}</StyledDisplay>
}

export default Display
