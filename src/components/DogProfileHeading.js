import React from "react"
import { connect } from "react-redux"
import { setPopup } from "../redux/actions"
import { Box, Typography, IconButton } from "@material-ui/core"
import { Share } from "@material-ui/icons"

const DogProfileHeading = props => {
  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "share":
        return props.dispatch(
          setPopup({
            visible: true,
            href: window.location.href,
            title: document.title,
          })
        )
      default:
        return
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box color="white">
        <Typography variant="h2">{props.name}</Typography>
      </Box>
      <Box>
        <IconButton edge="end" id="share" onClick={handleClick}>
          <Share />
        </IconButton>
      </Box>
    </Box>
  )
}

export default connect()(DogProfileHeading)
