import React from "react"
import {NavBar} from './NavBar'
import {HomepageNavBar} from "./HomepageNavBar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HomepageNavBar title={title}/>
      )
    } else {
      header = (
        <NavBar title={title}/>
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
