import React from "react"
import styled from "styled-components"
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const SocialLink = styled.a`
  color: ${props => props.theme.footerTextColor};
  margin-right: 1rem;
  &:hover {
    color: ${props => props.theme.footerTextColor};
  }
`
const SocialMediaIcons = ({ accounts }) => {
  console.log("accounts", accounts)

  const accountIcons = {
    facebook: <FaFacebookSquare />,
    youtube: <FaYoutube />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  }

  return (
    <div>
      {accounts.map(element => {
        console.log("AccountIcons:", accountIcons[element.platform])
        return (
          <SocialLink href={element.url}>
            {accountIcons[element.platform]}
          </SocialLink>
        )
      })}
    </div>
  )
}

export default SocialMediaIcons
