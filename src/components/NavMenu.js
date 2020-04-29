import React from "react"
import { Dialog, Box, ListItem, ListItemText, List } from "@material-ui/core"

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
            </ListItem>
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
