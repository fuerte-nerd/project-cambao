import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"

const SidebarQuickLinksItem = props => {
  return (
    <ListItem disableGutters button>
      <ListItemText primary={props.label} />
    </ListItem>
  )
}

export default SidebarQuickLinksItem
