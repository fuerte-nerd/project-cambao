import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"

const NavMenuHelpUsSubmenuItem = props => {
  return (
    <ListItem button id={props.id} divider={props.divider}>
      <ListItemText primary={props.title} style={{ textAlign: "center" }} />
    </ListItem>
  )
}

export default NavMenuHelpUsSubmenuItem
