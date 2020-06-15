import React from "react"
import { connect } from "react-redux"
import { setNav, setPopup } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import InternalLink from "./InternalLink"
import {
  useMediaQuery,
  useTheme,
  Tooltip,
  Button,
  Hidden,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Menu, Facebook, Instagram, Share } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import Img from "gatsby-image"
import NavbarSocialButton from "./NavbarSocialButton"
import text from "./text"

const Navbar = props => {
  const { lang } = props

  const mdUp = useMediaQuery(useTheme().breakpoints.up("md"))

  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "open-menu":
        return props.dispatch(setNav(true))
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

  return (
    <AppBar>
      <Toolbar>
        <InternalLink to="/">
          <Tooltip title={lang ? text.homeTooltip[lang] : ""}>
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
          <NavbarSocialButton
            tooltip={lang ? text.facebookTooltip[lang] : ""}
            username={data.links.childMarkdownRemark.frontmatter.facebook}
            id="facebook"
          >
            <Facebook
              style={{
                ...middleIconsStyle,
                background: socialBackgrounds.facebook,
              }}
            />
          </NavbarSocialButton>
          <NavbarSocialButton
            tooltip={lang ? text.instagramTooltip[lang] : ""}
            username={data.links.childMarkdownRemark.frontmatter.instagram}
            id="instagram"
          >
            <Instagram
              style={{
                ...middleIconsStyle,
                background: socialBackgrounds.instagram,
              }}
            />
          </NavbarSocialButton>
          <NavbarSocialButton
            tooltip={lang ? text.messengerTooltip[lang] : ""}
            username={data.links.childMarkdownRemark.frontmatter.facebook}
            id="messenger"
          >
            <FacebookMessenger
              style={{
                ...middleIconsStyle,
                background: socialBackgrounds.messenger,
              }}
            />
          </NavbarSocialButton>
        </Hidden>
        <Box mr={2} ml={mdUp ? 1 : 0}>
          <Tooltip title={lang ? text.shareTooltip[lang] : ""}>
            <Button
              onClick={handleClick}
              id="share"
              size="small"
              variant="outlined"
              color="inherit"
              endIcon={<Share />}
            >
              {lang ? text.share[lang] : ""}
            </Button>
          </Tooltip>
        </Box>
        <Box color="primary.dark">
          <Tooltip title={lang ? text.menuTooltip[lang] : ""}>
            <Button
              variant="contained"
              onClick={handleClick}
              id="open-menu"
              color="inherit"
              endIcon={<Menu />}
            >
              {lang ? text.menu[lang] : ""}
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
const middleIconsStyle = {
  fontSize: "1.2rem",
  width: "1.75rem",
  height: "1.75rem",
  padding: "0.3rem",
  borderRadius: "50%",
}

const socialBackgrounds = {
  facebook: "#1877f2",
  instagram:
    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  messenger: "#0084FF",
}
const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(Navbar)
