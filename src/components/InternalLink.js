import React from "react"
import { AniLink } from "gatsby-plugin-transition-link"

const InternalLink = props => {
  return (
    <AniLink
      to={props.to}
      fade
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </AniLink>
  )
}

export default InternalLink
