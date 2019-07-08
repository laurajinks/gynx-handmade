import React from "react"
import ravelryImg from '../../content/assets/ravelry-logo-svgrepo-com.svg'
import instagramImg from '../../content/assets/iconmonstr-instagram-11.svg'
import { graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import styles from './Footer.module.css'

const style = {

}

export const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `)
  const {title} = props
  return (
    <div className={styles['footer']}>
      <div className={styles['footerLinks']}>
        <a href={`https://ravelry.com/groups/gynx-handmade-podcast`}>
          <img
            src={ravelryImg}
            alt={'ravelry'}
            className={styles['footerImg']}
          />
        </a>
        <a href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}>
          <img
            src={instagramImg}
            alt={'instagram'}
            className={styles['footerImg']}
          />
        </a>
      </div>
      <div>© {new Date().getFullYear()} {title}</div>
    </div>
  )
}