import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import colors from "../../colors"

const InternalLink = props => {
  return (
    <AniLink
      to={props.to}
      swipe
      entryOffset={90}
      direction="down"
      duration={5}
      bg={colors.fdr_blue}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </AniLink>
  )
}

export default InternalLink
