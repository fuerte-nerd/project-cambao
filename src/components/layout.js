import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import Navbar from "./Navbar"
import NavMenu from "./NavMenu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Sniglet&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline>
        <Navbar />
        <NavMenu />
        <main>{children}</main>
      </CssBaseline>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
