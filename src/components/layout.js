import React from "react"
import {NavBar} from './NavBar'
import {Footer} from './Footer'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <>
      <header><NavBar title={title}/></header>
      <div
        style={style}
      >
        <main style={{marginTop: '6em'}}>{children}</main>
        <footer>
          <Footer title={title} />
        </footer>
      </div>
        </>
    )
  }
}

const style = {
  margin: '3em auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '90%'
}

export default Layout
