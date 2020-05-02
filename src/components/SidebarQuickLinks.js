import React, { useState } from "react"
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core"

import { ExpandLess, ExpandMore } from "@material-ui/icons"

const SidebarQuickLinks = () => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)
  const handleClick = e => {
    const f = e.currentTarget

    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      default:
        return
    }
  }
  return (
    <>
      <Box pb={1}>
        <Typography variant="overline">Quick Links</Typography>
        <Divider />
      </Box>
      <List disablePadding dense>
        <ListItem disableGutters button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem disableGutters button>
          <ListItemText primary="The Dogs" />
        </ListItem>
        <ListItem disableGutters button>
          <ListItemText primary="Who are we?" />
        </ListItem>
        <ListItem disableGutters onClick={handleClick} id="help-us" button>
          <ListItemText primary="Help us" />
          {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={helpUsOpen}>
          <Box p={1} bgcolor="#fafafa">
            <List dense disablePadding>
              <ListItem button>
                <ListItemText primary="Adopt" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Foster" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Donate" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Volunteer" />
              </ListItem>
            </List>
          </Box>
        </Collapse>
        <ListItem disableGutters button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </>
  )
}

export default SidebarQuickLinks
