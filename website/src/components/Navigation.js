import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
//import { theme } from "../layouts/theme"

import { MdHome } from "react-icons/md"
import Menu from "../assets/menu.svg"

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  overflow: scroll;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 99;
  top: 0px;
  background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.5)" : "unset")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: ${({ theme }) => theme.mobileMenuTransition};
  transition: left 10ms linear;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    overflow: scroll;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    left: 0;
    z-index: 99;
    top: 0px;
    background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.5)" : "unset")};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: ${({ theme }) => theme.mobileMenuTransition};
    transition: left 10ms linear;
  }
`
export const Nav = styled.ul`
  display: flex;

  position: absolute;
  left: 0;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mobileMenuBackground};
  width: 33%;
  min-height: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: ${({ theme }) => theme.mobileMenuTransition};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    left: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.mobileMenuBackground};
    width: 80%;
    min-height: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: ${({ theme }) => theme.mobileMenuTransition};
  }
`
const ListItem = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  &:hover {
    background-color: ${({ theme }) => theme.lightBrown};
    font-weight: 500;
  }
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.linkActive};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    color: white;
    width: 100%;
    min-height: 60px;
    justify-content: flex-start;
    padding-left: 1rem;
    padding: 1rem 0;
    padding-left: 1rem;
    border-top: 1px solid black;
    &:first-child {
      border: 0px;
    }
  }
`
const LinkItem = styled(Link)`
  display: flex;
  padding: 0.5em;
  font-size: 24px;
  vertical-align: center;
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    color: white;
    margin: 0 auto;
  }
`

const ToggleWrapper = styled.div`

    display: flex;
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 100;
    top: 0.8em;
    display: flex;
    border-radius: 0.2em;
    flex-direction: column;
    justify-content: space-around;
    transition: ${({ theme }) => theme.mobileMenuTransition};

    span {
      transition: ${({ theme }) => theme.mobileMenuTransition};
      transform-origin: 1px;
      border-color: ${({ open, theme }) =>
        open ? theme.toggleOpenColor : theme.toggleCloseColor};
      &:nth-child(2) {
        border: ${({ open }) => (open ? "unset" : open)};
      }
      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:last-child {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   display: flex;
  //   width: 25px;
  //   height: 25px;
  //   position: fixed;
  //   z-index: 100;
  //   right: 0.8em;
  //   top: 0.8em;
  //   display: flex;
  //   border-radius: 0.2em;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   transition: ${({ theme }) => theme.mobileMenuTransition};

  //   span {
  //     transition: ${({ theme }) => theme.mobileMenuTransition};
  //     transform-origin: 1px;
  //     border-color: ${({ open }) => (open ? "white" : "black")};
  //     &:nth-child(2) {
  //       border: ${({ open }) => (open ? "unset" : open)};
  //     }
  //     &:first-child {
  //       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  //     }
  //     &:last-child {
  //       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  //     }
  //   }
  // }
`
const Line = styled.span`
  width: 100%;
  height: 0px;
  border-bottom: 2px solid;
`
const NavbarToggle = ({ open, onClick }) => {
  return (
    <ToggleWrapper onClick={onClick} open={open}>
      <Line />
      <Line />
      <Line />
    </ToggleWrapper>
  )
}

export const NavLink = props => {
  return (
    <ListItem style={props.style}>
      <LinkItem to={props.to}>{props.children}</LinkItem>
    </ListItem>
  )
}

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.primaryDark};
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-bottom: 3px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Navigation = ({ children, navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log("navigation", navigation)
  return (
    <>
      <NavbarToggle
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
        open={menuOpen}
      />
      <Navbar
        open={menuOpen}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <Nav open={menuOpen}>
          <FirstRow>
            <NavLink to="/" style={{ flexBasis: "25%" }}>
              <MdHome />
            </NavLink>
            <Menu style={{ flexBasis: "75%", height: "auto" }} />
          </FirstRow>
          {navigation?.map(element => (
            <NavLink key={element.id} to={`/${element.slug.current}`}>
              {element.title}
            </NavLink>
          ))}
        </Nav>
      </Navbar>
    </>
  )
}
