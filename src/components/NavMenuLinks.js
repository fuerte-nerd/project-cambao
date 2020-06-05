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
import text from "./text"

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
          title={text.labelHome[props.lang]}
          subtitle={text.subtitleHome[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="/the-dogs"
          title={text.labelTheDogs[props.lang]}
          subtitle={text.subtitleTheDogs[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="/who-are-we"
          title={text.labelWhoAreWe[props.lang]}
          subtitle={text.subtitleWhoAreWe[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          id="help-us"
          link="#"
          title={text.labelHelpUs[props.lang]}
          subtitle={text.subtitleHelpUs[props.lang]}
          clickEvent={handleClick}
          divider
          dropdown
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <NavMenuHelpUsSubmenu />
        </Collapse>
        <NavMenuLinksItem
          link="/contact"
          title={text.labelContact[props.lang]}
          subtitle={text.subtitleContact[props.lang]}
          clickEvent={handleClick}
          divider
        />
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
  lang: state.siteLang,
})

export default connect(mapStateToProps)(NavMenuLinks)
