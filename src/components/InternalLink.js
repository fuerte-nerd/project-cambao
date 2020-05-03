import React from "react"
import { Link } from "gatsby"
import colors from "../../colors"

const InternalLink = props => {
  return (
    <Link to={props.to} style={{ textDecoration: "none", color: "inherit" }}>
      {props.children}
    </Link>
  )
}

export default InternalLink
