import React from "react"
import { Box, List } from "@material-ui/core"
import NavMenuHelpUsSubmenuItem from "./NavMenuHelpUsSubmenuItem"

const NavMenuHelpUsSubmenu = () => {
  return (
    <Box bgcolor="#fafafa">
      <List dense disablePadding>
        <NavMenuHelpUsSubmenuItem title="Adopt" id="adopt" link="adopt" />
        <NavMenuHelpUsSubmenuItem title="Foster" id="foster" link="foster" />
        <NavMenuHelpUsSubmenuItem title="Donate" id="donate" link="donate" />
        <NavMenuHelpUsSubmenuItem
          title="Volunteer"
          id="volunteer"
          link="volunteer"
        />
      </List>
    </Box>
  )
}

export default NavMenuHelpUsSubmenu
