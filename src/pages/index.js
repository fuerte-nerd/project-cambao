import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../redux/actions"
import { useStaticQuery, graphql } from "gatsby"
import { getUserLocales } from "get-user-locale"
import { Box, CircularProgress } from "@material-ui/core"
import { navigate } from "gatsby"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          supportedLanguages
        }
      }
    }
  `)

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={80} />
    </Box>
  )
}

export default connect()(IndexPage)
