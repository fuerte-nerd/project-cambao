import React from "react"
import { Hidden, Tooltip, Button, ButtonGroup } from "@material-ui/core"

const LanguageSelector = () => {
  return (
    <>
      <Hidden smUp>
        <Tooltip title="Tap to change">
          <Button size="small" color="inherit" variant="outlined">
            Language: Eng
          </Button>
        </Tooltip>
      </Hidden>
      <Hidden xsDown>
        <ButtonGroup size="small" disableElevation>
          <Button variant="contained">EN</Button>
          <Button>ES</Button>
          <Button>DE</Button>
          <Button>IT</Button>
          <Button>FR</Button>
        </ButtonGroup>
      </Hidden>
    </>
  )
}

export default LanguageSelector
