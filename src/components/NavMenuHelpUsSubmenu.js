import React from "react"
import { Box, List } from "@material-ui/core"
import NavMenuHelpUsSubmenuItem from "./NavMenuHelpUsSubmenuItem"

const NavMenuHelpUsSubmenu = () => {
  return (
    <Box bgcolor="#fafafa">
      <List dense disablePadding>
        <NavMenuHelpUsSubmenuItem title="Adopt" id="adopt" />
        <NavMenuHelpUsSubmenuItem title="Foster" id="foster" />
        <NavMenuHelpUsSubmenuItem title="Donate" id="donate" />
        <NavMenuHelpUsSubmenuItem title="Volunteer" id="volunteer" />
      </List>
    </Box>
  )
}

export default NavMenuHelpUsSubmenu
