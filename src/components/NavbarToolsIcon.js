import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Tooltip, IconButton } from "@material-ui/core"

const NavbarToolsIcon = props => {
  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "donate":
        return props.dispatch(setDonateDialog(true))
      case "facebook":
        return window.open(`https://facebook.com/${props.username}`, "_blank")
      case "instagram":
        return window.open(`https://instagram.com/${props.username}`, "_blank")
      case "messenger":
        return window.open(`https://m.me/${props.username}`, "_blank")
      default:
        return
    }
  }
  return (
    <Tooltip title={props.tooltip}>
      <IconButton id={props.id} onClick={handleClick} color="inherit">
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

export default connect()(NavbarToolsIcon)
