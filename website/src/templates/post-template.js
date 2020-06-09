import React, { useState, useEffect } from "react"
import Layout from "../layouts"
import { Link, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../components/seo"
// Helpers

import { imageUrlFor } from "../service/helper"
import blockSerializer from "../service/blockSerializer"

// Components
import { Container, Row, Col } from "react-bootstrap"


export const query = graphql`
  fragment getImage on SanityImage {
    _key
    _type
    asset {
      _id
    }
    crop {
      top
      right
      left
      bottom
      _key
      _type
    }
    hotspot {
      height
      _type
      _key
      width
      x
      y
    }
  }
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt(formatString: "DD.MM.YYYY | HH:MM")
      title
      excerpt
      author {
        name
        slug {
          current
          _type
          _key
        }
        image {
          ...getImage
        }
        socialMedia {
          linkedin
          github
        }
      }
      _rawBody
      mainImage {
        ...getImage
      }
    }
  }
`

const AuthorBlogComponent = ({ author }) => {
  const [authorImageUrl, setAuthorImageUrl] = useState(null)

  useEffect(() => {
    imageUrlFor(author.image)
      .then(imageBuilder =>
        imageBuilder.size(100, 100).auto("format").quality(80).url()
      )
      .then(url => {
        setAuthorImageUrl(url)
      })
      .catch(err => {
        if (err) throw err
      })
  }, [])

  return (
    <div className="author-info">
      <div className="author-image">
        Author Image
      </div>
      <div className="author-content">
        Author:
        <div className="author-name">Author Name/div>
        <div className="contact-info">
          Contact Info
        </div>
      </div>
    </div>
  )
}

const BlogPostTemplate = ({ data, errors }) => {
  // console.log("created page", data?.post)

  const HeroComponent = () => {
    return (
      <>
        <h1>{data.post?.title}</h1>
        <span className="post-detail-excerpt">{data.post?.excerpt}</span>
      </>
    )
  }

  return (
    <Layout className="post-detail">
      <SEO title={`Blog | ${data.post?.title}`} />

      <Hero
        image={data.post?.mainImage}
        component={<HeroComponent />}
        className="work-detail-hero"
        height={33}
        style={{ color: "white !important" }}
      />

      <Container className="post-detail-wrapper custom-wapper">
        <Row>
          <Col xs="1">
            <BackButton />
          </Col>
          <Col xs="10" sm="7">
            <span>{`veröffentlicht am ${data.post?.publishedAt}  ${
              data.post.author ? "von: " + data.post.author.name : ""
            }`}</span>
            <div className="post-detail-body">
              <BlockContent
                blocks={data.post?._rawBody}
                serializers={blockSerializer}
              />
            </div>
          </Col>

          <Col className="post-detail-widgets">
            {data.post.author && (
              <AuthorBlogComponent author={data.post.author} />
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate
