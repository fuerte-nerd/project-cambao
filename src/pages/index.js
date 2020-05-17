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
  useEffect(() => {
    const locales = getUserLocales()
    for (let i = 0; i < locales.length; i++) {
      if (data.site.siteMetadata.supportedLanguages.includes(locales[i])) {
        localStorage.setItem("fdr_lang_pref", locales[i])
        props.dispatch(setLanguage(locales[i]))
        return navigate(`/${locales[i]}/`)
      }
    }
    props.dispatch(setLanguage("en"))
    navigate("/en/")
  }, [])

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
