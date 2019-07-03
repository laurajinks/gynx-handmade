import React from "react"
import { Link } from "gatsby"

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const NavBar = (props) => {
  const {title} = props
 return (

    <div style={style}>
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          Blog
        </Link>
      </h3>
      <h3>
        <a
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          href={'http://youtube.com/gynxhandmade'}
        >
          Podcast
        </a>
      </h3>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/about`}
        >
          About
        </Link>
      </h3>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/resources`}
        >
          Resources
        </Link>
      </h3>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/contact`}
        >
          Contact
        </Link>
      </h3>
    </div>
  )
}
