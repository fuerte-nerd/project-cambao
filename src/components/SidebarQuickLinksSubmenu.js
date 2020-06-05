import React from "react"
import { connect } from "react-redux"
import { Box, List, ListItem, ListItemText } from "@material-ui/core"
import InternalLink from "./InternalLink"
import text from "./text"

const SidebarQuickLinksSubmenu = props => {
  return (
    <Box p={1} bgcolor="#fafafa">
      <List dense disablePadding>
        <InternalLink to="/adopt">
          <ListItem button>
            <ListItemText primary={text.labelAdopt[props.lang]} />
          </ListItem>
        </InternalLink>

        <InternalLink to="/foster">
          <ListItem button>
            <ListItemText primary={text.labelFoster[props.lang]} />
          </ListItem>
        </InternalLink>
        <InternalLink to="/donate">
          <ListItem button>
            <ListItemText primary={text.labelDonate[props.lang]} />
          </ListItem>
        </InternalLink>
        <InternalLink to="/volunteer">
          <ListItem button>
            <ListItemText primary={text.labelVolunteer[props.lang]} />
          </ListItem>
        </InternalLink>
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarQuickLinksSubmenu)
