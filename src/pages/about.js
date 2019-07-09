import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => {
  const {data, location} = props
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="About" />
      <h1>About</h1>
      <p>I'm Laura, and I'm a knitter and generally crafty person living in Dallas, TX. I am probably best well known as a former dyer and for my former business Gynx Yarns,
        which I ran from 2011 - 2018. I no longer dye for health reasons, but I still enjoy many other sides of the fiber world. In addition to knitting,
        my second favorite craft is sewing.
      <br/><br/>I am also the host of the <a href={'http://youtube.com/gynxhandmade'}>Gynx Handmade Podcast</a>, formerly The Dyer's Notebook Podcast,
      which I record with absolutely no schedule or consistency at this point ;)
      <br/><br/> When I'm not using my free time for making things, I can normally be found practicing various aerial arts, sipping on an oat milk latte, or hanging out
        with my husband Jose and our four cats: Othello, Augustus, Aurora, and Athena.</p>
      <Bio />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
