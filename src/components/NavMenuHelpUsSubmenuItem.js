import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import InternalLink from "./InternalLink"

const NavMenuHelpUsSubmenuItem = props => {
  return (
    <InternalLink to={props.link}>
      <ListItem button id={props.id} divider>
        <ListItemText
          primary={props.title}
          style={{ textAlign: "center" }}
          primaryTypographyProps={{ style: { fontSize: ".75rem" } }}
        />
      </ListItem>
    </InternalLink>
  )
}

export default NavMenuHelpUsSubmenuItem
