import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import InternalLink from "./InternalLink"
import {
  Tooltip,
  Hidden,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
} from "@material-ui/core"
import {
  Menu,
  EuroSymbol,
  Facebook,
  Instagram,
  Share,
} from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
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
      }
    }
  `)
  return (
    <AppBar>
      <Toolbar>
        <InternalLink to="/">
          <Tooltip title="Return home!">
            <Box display="flex" style={{ cursor: "pointer" }}>
              <Img fixed={data.file.childImageSharp.fixed} />
            </Box>
          </Tooltip>
        </InternalLink>
        <Hidden smDown>
          <Box ml={2}>
            <Typography variant="h6" variantMapping={{ h6: "h1" }}>
              {props.siteTitle}
            </Typography>
          </Box>
          <Box style={{ flex: 1 }} />
          <Tooltip title="Donate to the FDR dogs!">
            <IconButton color="inherit">
              <EuroSymbol />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Tooltip title="Share this page!">
          <IconButton color="inherit">
            <Share />
          </IconButton>
        </Tooltip>
        <Hidden smDown>
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
          <Tooltip title="Contact us on Messenger!">
            <IconButton onClick={handleClick} id="messenger" color="inherit">
              <FacebookMessenger />
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
