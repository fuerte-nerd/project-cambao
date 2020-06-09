import React from "react"
import { Tooltip, IconButton } from "@material-ui/core"

const NavMenuSocialLinksItem = props => {
  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "messenger":
        return window.open(`http://m.me/${props.username}`, "_blank")
      case "facebook":
        return window.open(
          `https://www.facebook.com/${props.username}`,
          "_blank"
        )
      case "instagram":
        return window.open(
          `https://www.instagram.com/${props.username}`,
          "_blank"
        )
      default:
        return
    }
  }

  return (
    <Tooltip title={props.tooltip}>
      <IconButton
        id={props.id}
        onClick={handleClick}
        color="inherit"
        edge={props.end ? "end" : false}
      >
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

export default NavMenuSocialLinksItem
