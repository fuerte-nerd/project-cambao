import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"

const NavMenuHelpUsSubmenuItem = props => {
  return (
    <ListItem button id={props.id} divider>
      <ListItemText
        primary={props.title}
        style={{ textAlign: "center" }}
        primaryTypographyProps={{ style: { fontSize: ".75rem" } }}
      />
    </ListItem>
  )
}

export default NavMenuHelpUsSubmenuItem
