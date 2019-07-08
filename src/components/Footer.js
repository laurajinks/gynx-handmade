import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

export const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      ravelry: file(absolutePath: { regex: "/ravelry-logo-svgrepo-com.svg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(absolutePath: { regex: "/rinconmonstr-instagram-11.svg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            ravelry
          }
        }
      }
    }
  `)
  const {title} = props
  return (
    <div style={style}>
      <div style={{display: 'flex'}}>
        <a href={`https://ravely.com/groups/${data.social.ravelry}`}>
          <Image
            fixed={data.ravelry.childImageSharp.fixed}
            alt={'ravelry'}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </a>
        <a href={data.instagram}>
          <Image
            fixed={`https://instagram.com/${data.social.instagram}`}
            alt={'instagram'}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </a>
      </div>
      <div>© {new Date().getFullYear()} {title}</div>
    </div>
  )
}