import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { BrandLogo } from "./BrandLogo"
import Palm from "../assets/palme-1.svg"
import GummiL from "../assets/gummi-baum-left.svg"
import GummiR from "../assets/gummi-baum-right.svg"
import styled from "styled-components"

const Canvas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
`

const LeftPalms = styled.div`
  position: relative;
  top: 0;
  left: -7%;
  width: 60%;
  height: 100%;

  svg {
    top: 0;
    right: 0;
    transform: scale(1.5, 1.5);
  }
  @media (max-width: ${props => props.theme.mobile}) {
    svg {
      transform: scale(1.2, 1.2);
    }
  }
`

const RightPalms = styled.div`
  position: relative;
  top: 0;
  right: -7%;
  width: 60%;
  height: 100%;

  svg {
    top: 0;
    left: 0;
    transform: scale(-1.5, 1.5);
  }
  @media (max-width: ${props => props.theme.mobile}) {
    svg {
      transform: scale(-1.2, 1.2);
    }
  }
`
const Palms = styled.div`
  position: relative;
  display: flex;
  width: 120%;
  height: 100%;
  z-index: 2;
  div {
    
  }
  svg {
    height: 100%;
    width: auto;
    position: absolute;
    :first-child {
      fill: ${({ theme }) => theme.primaryDark};
      top: 5px;
      
    }
    :nth-child(2) {
      fill: #395231;
    }
  }s
`

const GummiLeft = styled(GummiL)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: auto;
  width: 50%;
`
const GummiRight = styled(GummiR)`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: auto;
  width: 50%;
`
const LogoContainer = styled.div`
  height: auto;
  width: 25%;
  position: absolute;
  top: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.mobile}) {
    width: 50%;
  }
`

const StartPageLogo = styled(BrandLogo)`
  transform-origin: center center;
  z-index: 1;
  @media (max-width: ${props => props.theme.mobile}) {
    margin-top: 5px;
    top: 12.5%;
    svg {
      width: 150px;
    }
  }
`
const StartpageAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim1",
        start: "top 60px",
        end: "50%",
        scrub: true,
        markers: false,
      },
    })

    tl1
      .to(".left-palms", {
        duration: 1,
        xPercent: -50,
        rotation: 45,
        transformOrigin: "0% 0%",
      })
      .to(
        ".right-palms",
        {
          duration: 1,
          xPercent: 50,
          rotation: -45,
          transformOrigin: "100% 0%",
        },
        "-=1"
      )
      .to(
        "#gummi-left",
        {
          duration: 1,
          scale: 2,
          rotation: -40,
          transformOrigin: "100% 50%",
          ease: "none",
        },
        "-=1"
      )
      .to(
        "#gummi-right",
        {
          duration: 1,
          scale: 2,
          rotation: 40,
          transformOrigin: "0% 50%",
          ease: "none",
        },
        "-=1"
      )
      .to(".headerLogo", { opacity: 1, duration: 2 }, "+=1")
  })
  return (
    <Canvas className="anim1">
      <LogoContainer>
        <StartPageLogo className="box" width="100%" />
        <GummiLeft width="auto" height="auto" id="gummi-left" />
        <GummiRight width="auto" height="auto" id="gummi-right" />
      </LogoContainer>
      <Palms>
        <LeftPalms className="palms left-palms">
          <Palm transform="scale(1,1)" />
          <Palm transform="scale(1,1)" />
        </LeftPalms>

        <RightPalms className="palms right-palms">
          <Palm transform="scale(-1,1)" />
          <Palm transform="scale(-1,1)" />
        </RightPalms>
      </Palms>
    </Canvas>
  )
}

export default StartpageAnimation
