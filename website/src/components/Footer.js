import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
// import FooterNavigation from "../components/FooterNavigation"
import SocialMediaIcons from "../components/SocialMediaIcons"

const FooterWrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  * {
    color: ${props => props.theme.footerTextColor};
  }
  p {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    padding: 20px 0 20px 0;
    flex-direction: column;
    align-items: center;
  }
`
const FooterContainer = styled(Container)`
  display: flex;
  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`
const FooterNavigation = ({ items }) => {
  console.log("items:", items)
  if (items.length === 0 || !items) {
    return
  }

  return items.map(element => (
    <Link to={element.slug.current}>{element.title}</Link>
  ))
}

const Footer = ({ navigation, socialMedia, copyright, children }) => {
  console.log("Footernav", navigation)
  return (
    <FooterWrapper>
      <FooterContainer>
        {socialMedia ? <SocialMediaIcons accounts={socialMedia} /> : ""}

        {navigation ? <FooterNavigation items={navigation} /> : ""}

        <p>
          Copyright {new Date().getFullYear()} © {copyright}
        </p>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
