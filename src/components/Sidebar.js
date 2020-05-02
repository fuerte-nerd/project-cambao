import React, { useState } from "react"

import {
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core"

import { ExpandLess, ExpandMore } from "@material-ui/icons"

import LocationMap from "./LocationMap"

const Sidebar = () => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)

  const handleClick = e => {
    const f = e.currentTarget

    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      default:
        return
    }
  }

  return (
    <Grid item xs={0} md={2}>
      <Box py={2} bgcolor="primary.light" boxShadow={2}>
        <Container>
          <Box pb={1}>
            <Typography variant="overline">Quick Links</Typography>
            <Divider />
          </Box>
          <List disablePadding dense>
            <ListItem disableGutters button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem disableGutters button>
              <ListItemText primary="The Dogs" />
            </ListItem>
            <ListItem disableGutters button>
              <ListItemText primary="Who are we?" />
            </ListItem>
            <ListItem disableGutters onClick={handleClick} id="help-us" button>
              <ListItemText primary="Help us" />
              {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={helpUsOpen}>
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
            </Collapse>
            <ListItem disableGutters button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Box pt={2} pb={1}>
            <Typography variant="overline">Location</Typography>
            <Divider />
          </Box>
          <LocationMap />
        </Container>
      </Box>
    </Grid>
  )
}

export default Sidebar
