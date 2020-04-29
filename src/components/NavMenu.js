import React from "react"
import {
  Dialog,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Collapse,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

const NavMenu = () => {
  return (
    <Dialog open={true} fullScreen>
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
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
              <ListItemText>Help us</ListItemText>
              <ListItemIcon>
                <ExpandMore />
              </ListItemIcon>
            </ListItem>
            <Collapse in>
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
