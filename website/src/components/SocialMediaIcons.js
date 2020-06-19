import React from "react"
import {
  FaFacebookSquare as facebook,
  FaYoutube as youtube,
  FaTwitter as twitter,
  FaInstagram as instagram,
} from "react-icons/fa"

const SocialMediaIcons = ({ accounts }) => {
  console.log("accounts", accounts)

  // const accounts;

  return (
    <div>
      {accounts.map(element => (
        <a href={element.url}>{element.platform}</a>
      ))}
    </div>
  )
}

export default SocialMediaIcons
