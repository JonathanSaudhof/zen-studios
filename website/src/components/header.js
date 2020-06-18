import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Container, Row, Col } from "react-bootstrap"
import { Navigation, NavLink } from "./Navigation"
import { BrandLogo } from "../components/BrandLogo"

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.theme.headerColor ? props.theme.headerColor : "#fff"};
  height: ${props => props.theme.headerHeight};
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
  opacity: 0;
  position: fixed;
`

const Header = ({ siteTitle, showLogo, logoUrl }) => {
  // TODO: make it dynamic!
  console.log("ShowLogo", showLogo)
  return (
    <MyHeader>
      <Container>
        <Row className="justify-content-between">
          <Col></Col>
          <Col className="d-flex justify-content-center">
            {showLogo ? <BrandLogo width="200px" className="headerLogo" /> : ""}
          </Col>
          <Col>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
    </MyHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
