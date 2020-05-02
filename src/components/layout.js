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
} from "@material-ui/core"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

import Navbar from "./Navbar"
import NavMenu from "./NavMenu"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
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
    <ThemeProvider theme={theme}>
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
              {children}
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Footer />
              </Container>
            </Grid>
          </Grid>
          <Toolbar />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
