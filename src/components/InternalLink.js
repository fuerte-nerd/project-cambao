import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import colors from "../../colors"

const InternalLink = props => {
  return (
    <AniLink
      to={props.to}
      entry={{ delay: 5 }}
      exit={{ delay: 50 }}
      delay={1}
      fade
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </AniLink>
  )
}

export default InternalLink
