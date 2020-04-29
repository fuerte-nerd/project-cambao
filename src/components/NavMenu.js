import React, { useState } from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import {
  Dialog,
  Box,
  ListItem,
  ListItemText,
  List,
  Fab,
  Collapse,
} from "@material-ui/core"
import { Close, ExpandMore, ExpandLess } from "@material-ui/icons"

const NavMenu = props => {
  const [helpUsOpen, setHelpUsOpen] = useState(false)

  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      case "close":
        return props.dispatch(setNav(false))
      default:
        return
    }
  }

  return (
    <Dialog open={props.isOpen} fullScreen>
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="primary.light"
        color="inherit"
      >
        <Box width="90vw" maxWidth="md">
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
            <ListItem onClick={handleClick} id="help-us" button divider>
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
      <Fab
        id="close"
        onClick={handleClick}
        style={{ position: "fixed", top: "1rem", right: "1rem" }}
      >
        <Close />
      </Fab>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(NavMenu)
