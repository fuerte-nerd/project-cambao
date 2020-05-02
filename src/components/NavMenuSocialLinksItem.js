import React from "react"
import { Tooltip, IconButton } from "@material-ui/core"

const NavMenuSocialLinksItem = props => {
  return (
    <Tooltip title={props.tooltip}>
      <IconButton color="inherit">{props.children}</IconButton>
    </Tooltip>
  )
}

export default NavMenuSocialLinksItem
