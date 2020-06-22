import React, { useState, useEffect } from "react"
import InstagramEmbed from "react-instagram-embed"
import userInstagram from "user-instagram"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const PostContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

const InstagramPosts = props => {
  let [posts, setPosts] = useState(null)
  useEffect(() => {
    userInstagram("josch_und_loui")
      .then(user => user.posts.map(element => element.url))
      .then(postings => {
        setPosts(postings.map(postUrl => postUrl))
      })
      .catch(console.error)
  })
  return (
    <PostContainer>
      {posts?.map((url, index) => {
        if (index > 2) {
          return false
        }
        return (
          <InstagramEmbed
            url={url}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        )
      })}
    </PostContainer>
  )
}
export default InstagramPosts
