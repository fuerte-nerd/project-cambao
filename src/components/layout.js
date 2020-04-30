import React, { useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Container,
  Box,
  Collapse,
  Grid,
  Hidden,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Toolbar,
  CssBaseline,
} from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import Navbar from "./Navbar"
import NavMenu from "./NavMenu"

const Layout = ({ children }) => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)

  const handleClick = e => {
    const f = e.currentTarget

    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      default:
        return
    }
  }
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
                  <Container>
                    <Typography variant="overline">Quick Links</Typography>
                    <List disablePadding dense>
                      <ListItem button>
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="The Dogs" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Who are we?" />
                      </ListItem>
                      <ListItem onClick={handleClick} id="help-us" button>
                        <ListItemText primary="Help us" />
                        {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={helpUsOpen}>
                        <List dense disablePadding>
                          <ListItem button>
                            <ListItemText
                              primary="Adopt"
                              style={{ textAlign: "center" }}
                            />
                          </ListItem>
                          <ListItem button>
                            <ListItemText
                              primary="Foster"
                              style={{ textAlign: "center" }}
                            />
                          </ListItem>
                          <ListItem button>
                            <ListItemText
                              primary="Donate"
                              style={{ textAlign: "center" }}
                            />
                          </ListItem>
                          <ListItem button>
                            <ListItemText
                              primary="Volunteer"
                              style={{ textAlign: "center" }}
                            />
                          </ListItem>
                        </List>
                      </Collapse>
                      <ListItem button>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </List>
                  </Container>
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
