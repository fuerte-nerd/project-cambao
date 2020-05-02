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
import SidebarQuickLinksSubmenu from "./SidebarQuickLinksSubmenu"

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
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <SidebarQuickLinksSubmenu />
        </Collapse>
        <SidebarQuickLinksItem
          label="Contact"
          id="contact"
          clickEvent={handleClick}
        />
      </List>
    </>
  )
}

export default SidebarQuickLinks
