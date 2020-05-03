import React, { useState } from "react"
import { List, Collapse } from "@material-ui/core"

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
          link="/"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label="The Dogs"
          id="the-dogs"
          link="the-dogs"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label="Who are we?"
          id="who-are-we"
          link="who-are-we"
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
          link="contact"
          clickEvent={handleClick}
        />
      </List>
    </>
  )
}

export default SidebarQuickLinks
