import React from "react"
const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

export const Footer = (props) => {
  const {title} = props
  return (
    <div style={style}>
      <div style={{display: 'flex'}}>
        <p>Instagram</p>
        <p>Ravelry</p>
      </div>
      <div>© {new Date().getFullYear()} {title}</div>
    </div>
  )
}