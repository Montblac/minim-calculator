import React from "react"
import styled from "styled-components"
import { theme } from "@styles"
const { colors } = theme

const StyledPrevious = styled.div`
  color: ${colors.nord6};
  display: block;
  position: absolute;
  right: 0;
  bottom: 2.5rem;
`

const Previous = ({ data }) => {
  return <StyledPrevious>{data}</StyledPrevious>
}
export default Previous
