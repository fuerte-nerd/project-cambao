import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import Img from "gatsby-image"

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography variant="h5" variantMapping={{ h5: "h1" }}>
          FDR
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
