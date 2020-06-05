import React from "react"
import { connect } from "react-redux"
import { Box, List } from "@material-ui/core"
import NavMenuHelpUsSubmenuItem from "./NavMenuHelpUsSubmenuItem"
import text from "./text"

const NavMenuHelpUsSubmenu = props => {
  return (
    <Box bgcolor="#fafafa">
      <List dense disablePadding>
        <NavMenuHelpUsSubmenuItem
          title={text.labelAdopt[props.lang]}
          id="adopt"
          link="/adopt"
        />
        <NavMenuHelpUsSubmenuItem
          title={text.labelFoster[props.lang]}
          id="foster"
          link="/foster"
        />
        <NavMenuHelpUsSubmenuItem
          title={text.labelDonate[props.lang]}
          id="donate"
          link="/donate"
        />
        <NavMenuHelpUsSubmenuItem
          title={text.labelVolunteer[props.lang]}
          id="volunteer"
          link="/volunteer"
        />
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(NavMenuHelpUsSubmenu)
