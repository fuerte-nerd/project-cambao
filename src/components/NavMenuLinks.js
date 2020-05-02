import React, { useState } from "react"
import { List, Collapse, useMediaQuery, useTheme } from "@material-ui/core"
import NavMenuLinksItem from "./NavMenuLinksItem"
import NavMenuHelpUsSubmenu from "./NavMenuHelpUsSubmenu"

const NavMenuLinks = () => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <List disablePadding dense={isLargeScreen ? false : true}>
      <NavMenuLinksItem
        id="home"
        title="Home"
        subtitle="Latest news and articles"
        divider
      />
      <NavMenuLinksItem
        id="the-dogs"
        title="The Dogs"
        subtitle="Meet our current guests"
        divider
      />
      <NavMenuLinksItem
        id="who-are-we"
        title="Who are we?"
        subtitle="Get to know us"
        divider
      />
      <NavMenuLinksItem
        id="help-us"
        title="Help us"
        subtitle="Find out how you can help"
        divider
        dropdown
        isOpen={helpUsOpen}
      />
      <Collapse in={helpUsOpen}>
        <NavMenuHelpUsSubmenu />
      </Collapse>
      <NavMenuLinksItem
        id="contact"
        title="Contact"
        subtitle="Get in touch with us"
        divider
      />
    </List>
  )
}

export default NavMenuLinks
