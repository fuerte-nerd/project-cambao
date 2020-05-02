import React from "react"
import NavMenuLinksItem from "./NavMenuLinksItem"

const NavMenuLinks = () => {
  return (
    <List disablePadding dense={isLargeScreen ? false : true}>
      <NavMenuLinksItem
        title="Home"
        subtitle="Latest news and articles"
        divider
      />

      <ListItem button divider>
        <ListItemText primary="Home" secondary="Latest news and articles" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="The Dogs" secondary="Meet our current guests" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Who are we?" secondary="Get to know us" />
      </ListItem>
      <ListItem onClick={handleClick} id="help-us" button divider>
        <ListItemText primary="Help us" secondary="Find out how you can help" />
        {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={helpUsOpen}>
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
      </Collapse>
      <ListItem button>
        <ListItemText primary="Contact" secondary="Get in touch with us" />
      </ListItem>
    </List>
  )
}

export default NavMenuLinks
