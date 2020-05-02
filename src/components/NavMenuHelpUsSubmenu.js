import React from "react"

const NavMenuHelpUsSubmenu = () => {
  return (
    <List dense disablePadding>
      <ListItem button divider>
        <ListItemText primary="Adopt" style={{ textAlign: "center" }} />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Foster" style={{ textAlign: "center" }} />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Donate" style={{ textAlign: "center" }} />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Volunteer" style={{ textAlign: "center" }} />
      </ListItem>
    </List>
  )
}

export default NavMenuHelpUsSubmenu
