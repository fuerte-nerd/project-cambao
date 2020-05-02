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
  Divider,
} from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { ThemeProvider } from "@material-ui/core/styles"
import Img from "gatsby-image"
import theme from "./theme"
import Navbar from "./Navbar"
import NavMenu from "./NavMenu"
import LocationMap from "./LocationMap"
import Footer from "./Footer"

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
    {
      siteTitle: site {
        siteMetadata {
          title
        }
      }
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 205, maxHeight: 205) {
            ...GatsbyImageSharpFluid
          }
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
              <Grid item xs={0} md={2}>
                <Box py={2} bgcolor="primary.light" boxShadow={2}>
                  <Container>
                    <Box pb={1}>
                      <Typography variant="overline">Quick Links</Typography>
                      <Divider />
                    </Box>
                    <List disablePadding dense>
                      <ListItem disableGutters button>
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem disableGutters button>
                        <ListItemText primary="The Dogs" />
                      </ListItem>
                      <ListItem disableGutters button>
                        <ListItemText primary="Who are we?" />
                      </ListItem>
                      <ListItem
                        disableGutters
                        onClick={handleClick}
                        id="help-us"
                        button
                      >
                        <ListItemText primary="Help us" />
                        {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={helpUsOpen}>
                        <Box p={1} bgcolor="#fafafa">
                          <List dense disablePadding>
                            <ListItem button>
                              <ListItemText primary="Adopt" />
                            </ListItem>
                            <ListItem button>
                              <ListItemText primary="Foster" />
                            </ListItem>
                            <ListItem button>
                              <ListItemText primary="Donate" />
                            </ListItem>
                            <ListItem button>
                              <ListItemText primary="Volunteer" />
                            </ListItem>
                          </List>
                        </Box>
                      </Collapse>
                      <ListItem disableGutters button>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </List>
                    <Box pt={2} pb={1}>
                      <Typography variant="overline">Location</Typography>
                      <Divider />
                    </Box>
                    <LocationMap />
                  </Container>
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10} justify="center">
              {children}
            </Grid>
            <Grid>
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
