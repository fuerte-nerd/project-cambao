import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Grid,
  Hidden,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Toolbar,
  CssBaseline,
} from "@material-ui/core"
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
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <NavMenu />
        <Box
          bgcolor="primary.main"
          width="100vw"
          minHeight="100vh"
          component="main"
        >
          <Toolbar />
          <Grid container>
            <Hidden smDown>
              <Grid item xs={0} md={2}>
                <Box bgcolor="primary.light" boxShadow={2}>
                  <List>
                    <ListSubheader>Quick Links</ListSubheader>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText></ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10} justify="center">
              {children}
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
