import React from "react"
import InternalLink from "./InternalLink"
import { ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

const NavMenuLinksItem = props => {
  return (
    {props.dropdown ? null : <InternalLink to={props.link}>}
      <ListItem
        button
        id={props.id}
        divider={props.divider ? true : false}
        onClick={props.clickEvent}
      >
        <ListItemText
          primary={props.title}
          secondary={props.subtitle}
          primaryTypographyProps={{ style: { color: "#fafafa" } }}
        />
        {props.dropdown ? props.isOpen ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
        {props.dropdown ? null : <></InternalLink></> }
  )
}

export default NavMenuLinksItem
