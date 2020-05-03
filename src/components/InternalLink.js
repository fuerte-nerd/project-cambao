import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const InternalLink = props => {
  return (
    <AniLink
      to={props.to}
      swipe
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </AniLink>
  )
}

export default InternalLink
