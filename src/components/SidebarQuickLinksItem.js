import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

const SidebarQuickLinksItem = props => {
  return (
    <ListItem disableGutters button id={props.id} onClick={props.clickEvent}>
      <ListItemText primary={props.label} />
      {props.dropdown ? props.isOpen ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItem>
  )
}

export default SidebarQuickLinksItem
