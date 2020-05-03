import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import colors from "../../colors"

const InternalLink = props => {
  return (
    <AniLink
      to={props.to}
      delay={1}
      fade
      duration={5}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </AniLink>
  )
}

export default InternalLink
