import React from "react"
import { Link } from "gatsby"
import {NavBar} from './NavBar'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <NavBar />
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
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
        </h3>
      )
    }
    return (
      <div
        style={style}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Gynx Handmade
        </footer>
      </div>
    )
  }
}

const style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default Layout
