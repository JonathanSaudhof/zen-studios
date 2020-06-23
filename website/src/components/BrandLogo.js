import React from "react"
import Logo from "../assets/logo.svg"
import styled from "styled-components"

export const BrandLogo = props => {
  const Wrapper = styled.div`
    border-radius: 5px;
    background-color: ${props => props.theme.primaryDark};
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
    #Zen,
    #Rahmen {
      animation: flicker 3s infinite 2s step-end;
    }
    #Studios {
      animation: flicker 4s infinite 1s step-end;
    }
  `
  return (
    <Wrapper className={props.className}>
      <Logo
        width={props.width}
        height="auto"
        viewBox="0 0 105 85"
        style={{ zIndex: 2 }}
      />
    </Wrapper>
  )
}
