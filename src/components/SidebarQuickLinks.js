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

import SidebarSectionTitle from "./SidebarSectionTitle"
import SidebarQuickLinksItem from "./SidebarQuickLinksItem"

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
      <SidebarSectionTitle title="Quick Links" top />
      <List disablePadding dense>
        <SidebarQuickLinksItem
          label="Home"
          id="home"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label="The Dogs"
          id="the-dogs"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label="Who are we?"
          id="who-are-we"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label="Help us"
          id="help-us"
          clickEvent={handleClick}
          dropdown
        />
        <ListItem disableGutters onClick={handleClick} id="help-us" butto>
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
