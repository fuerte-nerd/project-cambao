import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"

const NavMenuLinksItem = props => {
  return (
    <ListItem button divider={props.divider ? true : false}>
      <ListItemText primary={props.title} secondary={props.subtitle} />
    </ListItem>
  )
}

export default NavMenuLinksItem
