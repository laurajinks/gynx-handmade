import React from "react"
import {NavBar} from './NavBar'
import {HomepageNavBar} from "./HomepageNavBar"
import {Footer} from './Footer'

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
      <>
      <header>{header}</header>
      <div
        style={style}
      >
        <main style={{marginTop: '5em'}}>{children}</main>
        <footer>
          <Footer title={title} />
        </footer>
      </div>
        </>
    )
  }
}

const style = {
  margin: '2em auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '90%'
}

export default Layout
