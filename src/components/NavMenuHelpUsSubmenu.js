import React from "react"
import { List } from "@material-ui/core"
import NavMenuHelpUsSubmenuItem from "./NavMenuHelpUsSubmenuItem"

const NavMenuHelpUsSubmenu = () => {
  return (
    <List dense disablePadding>
      <NavMenuHelpUsSubmenuItem title="Adopt" id="adopt" />
      <NavMenuHelpUsSubmenuItem title="Foster" id="foster" />
      <NavMenuHelpUsSubmenuItem title="Donate" id="donate" />
      <NavMenuHelpUsSubmenuItem title="Volunteer" id="volunteer" />
    </List>
  )
}

export default NavMenuHelpUsSubmenu
