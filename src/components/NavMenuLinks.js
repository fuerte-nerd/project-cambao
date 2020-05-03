import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import {
  Box,
  Divider,
  List,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import NavMenuLinksItem from "./NavMenuLinksItem"
import NavMenuHelpUsSubmenu from "./NavMenuHelpUsSubmenu"

const NavMenuLinks = props => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)
  const theme = useTheme()
  const isLandscapeMobile = useMediaQuery(
    "(max-width:800px) and (orientation: landscape)"
  )
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      default:
        return props.dispatch(setNav(false))
    }
  }
  useEffect(() => {
    if (!props.isOpen) {
      setHelpUsOpen(false)
    }
  }, [props.isOpen])
  return (
    <Box m={isLandscapeMobile ? "auto" : 0} width="90vw" maxWidth={400}>
      <Divider />
      <List disablePadding dense={isLargeScreen ? false : true}>
        <NavMenuLinksItem
          link="/"
          title="Home"
          subtitle="Latest news and articles"
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="the-dogs"
          title="The Dogs"
          subtitle="Meet our current guests"
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="who-are-we"
          title="Who are we?"
          subtitle="Get to know us"
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          id="help-us"
          link="#"
          title="Help us"
          subtitle="Find out how you can help"
          clickEvent={handleClick}
          divider
          dropdown
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <NavMenuHelpUsSubmenu />
        </Collapse>
        <NavMenuLinksItem
          link="contact"
          title="Contact"
          subtitle="Get in touch with us"
          clickEvent={handleClick}
          divider
        />
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(NavMenuLinks)
