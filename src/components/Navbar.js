import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Hidden,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import Img from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }, sourceInstanceName: { eq: "images" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
        sourceInstanceName
      }
    }
  `)
  return (
    <AppBar>
      <Toolbar>
        <Box display="flex">
          <Img fixed={data.file.childImageSharp.fixed} />
        </Box>
        <Hidden xsDown>
          <Box ml={2}>
            <Typography variant="h5" variantMapping={{ h5: "h1" }}>
              Fuerteventura Dog Rescue
            </Typography>
          </Box>
        </Hidden>
        <Box style={{ flex: 1 }} />
        <IconButton color="inherit" edge="end">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
