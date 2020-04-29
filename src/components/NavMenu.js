import React, { useState } from "react"
import {
  Dialog,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Collapse,
} from "@material-ui/core"
import { ExpandMore, ExpandLess } from "@material-ui/icons"

const NavMenu = () => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)

  const handleClick = () => {
    setHelpUsOpen(!helpUsOpen)
  }

  return (
    <Dialog open={true} fullScreen>
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="secondary.dark"
      >
        <Box>
          <List>
            <ListItem button divider>
              <ListItemText
                primary="Home"
                secondary="Latest news and articles"
              />
            </ListItem>
            <ListItem button divider>
              <ListItemText
                primary="The Dogs"
                secondary="Meet our current guests"
              />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="Who are we?" secondary="Get to know us" />
            </ListItem>
            <ListItem onClick={handleClick} button divider>
              <ListItemText
                primary="Help us"
                secondary="Find out how you can help"
              />
              {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={helpUsOpen}>
              <List dense>
                <ListItem button divider>
                  <ListItemText primary="Adopt" />
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary="Foster" />
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary="Donate" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Volunteer" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem Button>
              <ListItemText
                primary="Contact"
                secondary="Get in touch with us"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Dialog>
  )
}

export default NavMenu
