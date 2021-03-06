import React from "react"

const BigButton = props => <a href={props.to} style={{
  display: `inline-block`,
  padding: `10px`,
  color: props.fg,
  backgroundColor: props.bg,
  textTransform: `uppercase`,
  fontWeight: `bold`,
  minWidth: `150px`,
  textAlign: `center`,
  borderRadius: `5px`
}}>{props.children}</a>

export default BigButton