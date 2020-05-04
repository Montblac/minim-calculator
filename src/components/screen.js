import React from "react"
import styled from "styled-components"
import Display from "./display"
import Previous from "./previous"

const StyledScreen = styled.div`
  width: 100%;
  height: 32%;
  position: relative;
  margin: auto;
  text-align: right;
  border-radius: 3rem 3rem 0rem 0rem;
`

const Screen = ({ dispData, prevData }) => {
  return (
    <StyledScreen>
      <Previous data={prevData} />
      <Display data={dispData} />
    </StyledScreen>
  )
}
export default Screen
