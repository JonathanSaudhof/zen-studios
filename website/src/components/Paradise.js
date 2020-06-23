import React from "react"
import Logo from "../assets/welcome.svg"
import styled from "styled-components"

const Paradise = props => {
  const Wrapper = styled.div`
    display: flex;
    margin: auto;
    @keyframes flicker {
      0% {
        opacity: 1;
      }
      3% {
        opacity: 0.4;
      }
      6% {
        opacity: 1;
      }
      7% {
        opacity: 0.4;
      }
      8% {
        opacity: 1;
      }
      9% {
        opacity: 0.4;
      }
      10% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }

    #to {
      animation: flicker 10s infinite 1s step-end;
    }
  `
  return (
    <Wrapper className={props.className}>
      <Logo width={props.width} height="auto" style={{ zIndex: 2 }} />
    </Wrapper>
  )
}
export default Paradise
