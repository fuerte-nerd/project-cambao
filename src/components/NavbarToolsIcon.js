import React from "react"
import { Tooltip, IconButton } from "@material-ui/core"

const NavbarToolsIcon = props => {
  return (
    <Tooltip title={props.tooltip}>
      <IconButton
        color="inherit"
        classes={{ root: { fontSize: ".6rem" } }}
        style={{ fontSize: ".7rem" }}
      >
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

export default NavbarToolsIcon
