import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import InternalLink from "./InternalLink"
import {
  Tooltip,
  Button,
  Hidden,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
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
import NavbarToolsIcon from "./NavbarToolsIcon"

const useStyles = makeStyles(() => ({
  navToolsButton: {
    fontSize: "1.2rem",
  },
}))

const Navbar = props => {
  const classes = useStyles()
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

  const text = {
    menu: {
      en: "Menu",
      es: "Menú",
    },
    share: {
      en: "Share",
      es: "Compartir",
    },
    tooltips: {
      share: {
        en: "Share this page!",
        es: "¡Comparte esta página!",
      },
    },
  }

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
        </Hidden>
        <Box style={{ flex: 1 }} />
        <Hidden smDown>
          <NavbarToolsIcon tooltip="Donate to the FDR dogs!">
            <EuroSymbol className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip="Visit us on Facebook!">
            <Facebook className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip="Visit us on Instagram!">
            <Instagram className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip="Contact us on Messenger!">
            <FacebookMessenger className={classes.navToolsButton} />
          </NavbarToolsIcon>
        </Hidden>
        <Box style={{ flex: 1 }} />
        <Box mr={2}>
          <Tooltip title={text.tooltips.share[props.lang]}>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              endIcon={<Share />}
            >
              {text.share[props.lang]}
            </Button>
          </Tooltip>
        </Box>
        <Box color="primary.dark">
          <Tooltip title="Show me the menu!">
            <Button
              variant="contained"
              onClick={handleClick}
              id="open-menu"
              color="inherit"
              edge="end"
              endIcon={<Menu />}
            >
              {text.menu[props.lang]}
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(Navbar)
