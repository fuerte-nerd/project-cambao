import React from "react"
import { AniLink } from "gatsby-plugin-transition-link"
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
      <AniLink fade to="the-dogs">
        <ListItemText
          primary={props.title}
          secondary={props.subtitle}
          primaryTypographyProps={{ style: { color: "#fafafa" } }}
        />
      </AniLink>
      {props.dropdown ? props.isOpen ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItem>
  )
}

export default NavMenuLinksItem
