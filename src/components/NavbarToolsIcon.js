import React from "react"
import { Tooltip, IconButton } from "@material-ui/core"

const NavbarToolsIcon = props => {
  return (
    <Tooltip title={props.tooltip}>
      <IconButton color="inherit" style={{ fontSize: ".7rem" }}>
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

export default NavbarToolsIcon
