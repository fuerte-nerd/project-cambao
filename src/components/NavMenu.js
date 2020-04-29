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
        bgcolor="secondary"
      >
        <Box>
          <List>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>The Dogs</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Who are we?</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText onClick={handleClick}>Help us</ListItemText>
              {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={helpUsOpen}>
              <List>
                <ListItem>
                  <ListItemText></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText></ListItemText>
                </ListItem>
              </List>
            </Collapse>
            <ListItem>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Dialog>
  )
}

export default NavMenu
