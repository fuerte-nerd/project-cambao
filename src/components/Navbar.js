import React from "react"
import { connect } from "react-redux"
import { setNav, setPopup, setDonateDialog } from "../redux/actions"
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
      case "donate":
        return props.dispatch(setDonateDialog(true))
      case "share":
        return props.dispatch(
          setPopup({
            visible: true,
            href: window.location.href,
            title: document.title,
          })
        )
      default:
        return
    }
  }

  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo" }, sourceInstanceName: { eq: "images" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      links: file(
        name: { eq: "links" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
            instagram
            email
          }
        }
      }
    }
  `)

  const text = {
    menu: { en: "Menu", es: "Menú" },
    share: { en: "Share", es: "Compartir" },
    tooltips: {
      home: { en: "Return home!", es: "Volver a la página de inicio" },
      share: { en: "Share this page!", es: "¡Comparte esta página!" },
      menu: { en: "Show me the menu!", es: "¡Muéstrame el menú!" },
    },
    toolbuttons: {
      donate: { en: "Donate to the FDR dogs", es: "Done a los perros FDR" },
      facebook: { en: "Visit us on Facebook", es: "Visítanos en Facebook" },
      instagram: { en: "Visit us on Instagram", es: "Visítanos en Instagram" },
      messenger: {
        en: "Contact us on Messenger",
        es: "Contáctenos en el Messenger",
      },
    },
  }

  return (
    <AppBar>
      <Toolbar>
        <InternalLink to="/">
          <Tooltip title={text.tooltips.home[props.lang]}>
            <Box display="flex" style={{ cursor: "pointer" }}>
              <Img fixed={data.logo.childImageSharp.fixed} />
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
          <NavbarToolsIcon
            tooltip={text.toolbuttons.donate[props.lang]}
            onClick={handleClick}
            id="donate"
          >
            <EuroSymbol className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip={text.toolbuttons.facebook[props.lang]}>
            <Facebook className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip={text.toolbuttons.instagram[props.lang]}>
            <Instagram className={classes.navToolsButton} />
          </NavbarToolsIcon>
          <NavbarToolsIcon tooltip={text.toolbuttons.messenger[props.lang]}>
            <FacebookMessenger className={classes.navToolsButton} />
          </NavbarToolsIcon>
        </Hidden>
        <Box style={{ flex: 1 }} />
        <Box mr={2}>
          <Tooltip title={text.tooltips.share[props.lang]}>
            <Button
              onClick={handleClick}
              id="share"
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
          <Tooltip title={text.tooltips.menu[props.lang]}>
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
