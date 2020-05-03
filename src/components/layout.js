import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {
  Container,
  Box,
  Grid,
  Hidden,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"

import { ThemeProvider } from "@material-ui/core/styles"
import siteTheme from "./theme"

import Navbar from "./Navbar"
import NavMenu from "./NavMenu"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
      siteTitle: site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={siteTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Sniglet&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline>
        <Navbar siteTitle={data.siteTitle.siteMetadata.title} />
        <NavMenu />
        <Box
          bgcolor="primary.main"
          width="100%"
          minHeight="100vh"
          component="main"
        >
          <Toolbar />
          <Grid container>
            <Hidden smDown>
              <Sidebar />
            </Hidden>
            <Grid item xs={12} md={10} justify="center">
              <Box m={isNotMobile ? 3 : 1}>{children}</Box>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
