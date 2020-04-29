import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import {
  Hidden,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Menu, Facebook, Instagram, Share } from "@material-ui/icons"
import Img from "gatsby-image"

const Navbar = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "open-menu":
        return props.dispatch(setNav(true))
      default:
        return
    }
  }

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
            <Typography variant="h6" variantMapping={{ h6: "h1" }}>
              {props.siteTitle}
            </Typography>
          </Box>
        </Hidden>
        <Box style={{ flex: 1 }} />
        <IconButton color="inherit">
          <Share />
        </IconButton>
        <Hidden xsDown>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
        </Hidden>
        <IconButton
          onClick={handleClick}
          id="open-menu"
          color="inherit"
          edge="end"
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default connect()(Navbar)
