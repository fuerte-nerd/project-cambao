import React from "react"
import { Box, List, ListItem, ListItemText } from "@material-ui/core"

const SidebarQuickLinksSubmenu = () => {
  return (
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
  )
}

export default SidebarQuickLinksSubmenu
