import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import {
  useTheme,
  useMediaQuery,
  Tooltip,
  Dialog,
  Box,
  ListItem,
  ListItemText,
  List,
  Fab,
  Collapse,
  Slide,
} from "@material-ui/core"
import { Close, ExpandMore, ExpandLess } from "@material-ui/icons"
import Img from "gatsby-image"

import NavMenuSocialLinks from "./NavMenuSocialLinks"
import LanguageSelector from "./LanguageSelector"
import NavMenuLinks from "./NavMenuLinks"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const NavMenu = props => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)
  const isLandscapeMobile = useMediaQuery(
    "(max-width:800px) and (orientation: landscape)"
  )
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      case "close":
        return props.dispatch(setNav(false))
      default:
        return
    }
  }

  const handleClose = () => {
    props.dispatch(setNav(false))
  }

  useEffect(() => {
    if (!props.isOpen) {
      setHelpUsOpen(false)
    }
  }, [props.isOpen])
  const data = useStaticQuery(graphql`
    {
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
    <Dialog
      TransitionComponent={Transition}
      open={props.isOpen}
      onClose={handleClose}
      PaperProps={{ style: { background: theme.palette.secondary.main } }}
      fullScreen
    >
      <Box
        mt={isLandscapeMobile ? 2 : 0}
        mb={isLandscapeMobile ? 20 : 0}
        mx="auto"
        width="90vw"
        height="100%"
        minHeight="100vh"
        display={isLandscapeMobile ? "block" : "flex"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          maxWidth={400}
          m={isLandscapeMobile ? "10px auto" : 0}
          mb={1}
        >
          <Box display="block" width="30%" maxWidth={150} align="center">
            <Img fluid={data.logo.childImageSharp.fluid} />
          </Box>
          <Box
            color="#fafafa"
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
          >
            <NavMenuSocialLinks />
            <LanguageSelector />
          </Box>
        </Box>
        <Box
          m={isLandscapeMobile ? "auto" : 0}
          bgcolor="#fafafa"
          width="90vw"
          maxWidth={400}
          boxShadow={3}
        >
          <NavMenuLinks />
        </Box>
      </Box>
      <Tooltip title="Close menu">
        <Fab
          id="close"
          onClick={handleClick}
          style={{ position: "fixed", top: "1rem", right: "1rem" }}
        >
          <Close />
        </Fab>
      </Tooltip>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(NavMenu)
