import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"

const InternalLink = props => {
  return (
    <Link
      to={`/${props.lang + props.to}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </Link>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(InternalLink)
