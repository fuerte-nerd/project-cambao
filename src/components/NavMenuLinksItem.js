import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

const NavMenuLinksItem = props => {
  return (
    <ListItem
      button
      id={props.id}
      divider={props.divider ? true : false}
      onClick={props.clickEvent}
    >
      <ListItemText
        disableTypography
        primary={props.title}
        secondary={props.subtitle}
        primaryTypographyProps={{ style: { color: "#fafafa" } }}
      />
      {props.dropdown ? props.isOpen ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItem>
  )
}

export default NavMenuLinksItem
