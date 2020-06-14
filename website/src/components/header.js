import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Container, Row, Col } from "react-bootstrap"
import { Navigation, NavLink } from "./Navigation"

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.theme.headerColor ? props.theme.headerColor : "#fff"};
  height: ${props => props.theme.headerHeight};
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
`
const BrandLogo = styled.h1`
  background-image: url("${props => props.url}");
  background-position-x: 0px;
  background-position-y: center;
  text-indent: -9999px;
  height: ${props => props.theme.headerHeight};
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
  margin: 0px;
`

const Header = ({ siteTitle, showLogo, logoUrl }) => {
  // TODO: make it dynamic!
  console.log(showLogo)
  return (
    <MyHeader>
      <Container>
        <Row className="justify-content-between">
          <Col xs={8} md={5}>
            {showLogo}
          </Col>
          <Col xs={4} md={7}>
            <Navigation>
              <NavLink to="/site2">Moep</NavLink>
            </Navigation>
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
