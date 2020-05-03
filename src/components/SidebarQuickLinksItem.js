import React from "react"
import InternalLink from "./InternalLink"
import { ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

const SidebarQuickLinksItem = props => {
  return props.dropdown ? (
    <ListItem disableGutters button id={props.id} onClick={props.clickEvent}>
      <ListItemText primary={props.label} />
      {props.isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  ) : (
    <InternalLink to={props.link}>
      <ListItem disableGutters button id={props.id} onClick={props.clickEvent}>
        <ListItemText primary={props.label} />
      </ListItem>
    </InternalLink>
  )
}

export default SidebarQuickLinksItem
