import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = (props) => {
  const {data, location} = props
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="Resources" />
      <Bio />
      Resources
    </Layout>
  )
}

export default Resources

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`