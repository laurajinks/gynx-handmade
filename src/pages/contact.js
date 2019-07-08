import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import ContactForm from '../components/ContactForm'
import SEO from "../components/seo"

const Contact = (props) => {
  const {data, location} = props
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="Contact" />
      <ContactForm />
      <Bio />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`