import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import {
  Tooltip,
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
        <Tooltip title="Return home!" color="secondary.main">
          <Box display="flex" style={{ cursor: "pointer" }}>
            <Img fixed={data.file.childImageSharp.fixed} />
          </Box>
        </Tooltip>
        <Hidden xsDown>
          <Box ml={2}>
            <Typography variant="h6" variantMapping={{ h6: "h1" }}>
              {props.siteTitle}
            </Typography>
          </Box>
        </Hidden>
        <Box style={{ flex: 1 }} />
        <Tooltip title="Share this page!">
          <IconButton color="inherit">
            <Share />
          </IconButton>
        </Tooltip>
        <Hidden xsDown>
          <Tooltip title="Visit us on Facebook!">
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit us on Instagram!">
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Tooltip title="Show me the menu!">
          <IconButton
            onClick={handleClick}
            id="open-menu"
            color="inherit"
            edge="end"
          >
            <Menu />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default connect()(Navbar)
