import React from "react"
import { Box, List, ListItem, ListItemText } from "@material-ui/core"
import InternalLink from "./InternalLink"

const SidebarQuickLinksSubmenu = () => {
  return (
    <Box p={1} bgcolor="#fafafa">
      <List dense disablePadding>
        <InternalLink to="/adopt">
          <ListItem button>
            <ListItemText primary="Adopt" />
          </ListItem>
        </InternalLink>

        <InternalLink to="/foster">
          <ListItem button>
            <ListItemText primary="Foster" />
          </ListItem>
        </InternalLink>
        <InternalLink to="/donate">
          <ListItem button>
            <ListItemText primary="Donate" />
          </ListItem>
        </InternalLink>
        <InternalLink to="/volunteer">
          <ListItem button>
            <ListItemText primary="Volunteer" />
          </ListItem>
        </InternalLink>
      </List>
    </Box>
  )
}

export default SidebarQuickLinksSubmenu
