import React from "react"
import styled from "styled-components"

import { Container, Row, Col } from "react-bootstrap"
// import FooterNavigation from "../components/FooterNavigation"
import SocialMediaIcons from "../components/SocialMediaIcons"

const FooterWrapper = styled.footer`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #c4c4c4;
  p {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
  }
`

const FooterNavigation = ({ items }) => {
  console.log("items:", items)
  if (items.length === 0 || !items) {
    return
  }

  return items.map(element => <a href={"/" + items.slug}>{items.name}</a>)
}

const Footer = ({ navigation, socialMedia, copyright, children }) => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            {socialMedia ? <SocialMediaIcons accounts={socialMedia} /> : ""}
          </Col>
          <Col>{navigation ? <FooterNavigation items={navigation} /> : ""}</Col>
          <Col>
            <p>Copyright © {copyright}</p>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
