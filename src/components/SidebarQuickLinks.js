import React, { useState } from "react"
import { connect } from "react-redux"
import { List, Collapse } from "@material-ui/core"

import SidebarSectionTitle from "./SidebarSectionTitle"
import SidebarQuickLinksItem from "./SidebarQuickLinksItem"
import SidebarQuickLinksSubmenu from "./SidebarQuickLinksSubmenu"

import text from "./text"

const SidebarQuickLinks = props => {
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
      <SidebarSectionTitle title={text.quickNavigation[props.lang]} />
      <List disablePadding dense>
        <SidebarQuickLinksItem
          label={text.labelHome[props.lang]}
          id="home"
          link="/"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={text.labelTheDogs[props.lang]}
          id="the-dogs"
          link="/the-dogs"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={text.labelWhoAreWe[props.lang]}
          id="who-are-we"
          link="/who-are-we"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={text.labelHelpUs[props.lang]}
          id="help-us"
          clickEvent={handleClick}
          dropdown
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <SidebarQuickLinksSubmenu />
        </Collapse>
        <SidebarQuickLinksItem
          label={text.labelContact[props.lang]}
          id="contact"
          link="/contact"
          clickEvent={handleClick}
        />
      </List>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarQuickLinks)
