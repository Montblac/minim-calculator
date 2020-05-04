import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  position: relative;
  top: 4rem;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.1rem;
  font-weight: 400;
  font-size: 1.5rem;
  color: #eceff4;
  @media (min-width: 450px) {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <StyledHeader>{data.site.siteMetadata.title}</StyledHeader>
}

export default Header
