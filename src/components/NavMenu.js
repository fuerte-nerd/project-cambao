import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  Grid,
  Tooltip,
  Dialog,
  Box,
  ListItem,
  ListItemText,
  List,
  Fab,
  Collapse,
  Slide,
} from "@material-ui/core"
import { Close, ExpandMore, ExpandLess } from "@material-ui/icons"
import Img from "gatsby-image"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

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

  const handleClose = () => {
    props.dispatch(setNav(false))
  }

  useEffect(() => {
    if (!props.isOpen) {
      setHelpUsOpen(false)
    }
  }, [props.isOpen])
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 205, maxHeight: 205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Dialog
      TransitionComponent={Transition}
      open={props.isOpen}
      onClose={handleClose}
      fullScreen
    >
      <Box
        width="100%"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="secondary.main"
        color="inherit"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Img
              fluid={data.logo.childImageSharp.fluid}
              style={{ maxWidth: 205, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              bgcolor="#fafafa"
              width="90vw"
              maxWidth={400}
              border={1}
              m="auto"
              borderColor="text.secondary"
            >
              <List disablePadding>
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
                  <ListItemText
                    primary="Who are we?"
                    secondary="Get to know us"
                  />
                </ListItem>
                <ListItem onClick={handleClick} id="help-us" button divider>
                  <ListItemText
                    primary="Help us"
                    secondary="Find out how you can help"
                  />
                  {helpUsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={helpUsOpen}>
                  <List dense disablePadding>
                    <ListItem button divider>
                      <ListItemText
                        primary="Adopt"
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                    <ListItem button divider>
                      <ListItemText
                        primary="Foster"
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                    <ListItem button divider>
                      <ListItemText
                        primary="Donate"
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                    <ListItem button divider>
                      <ListItemText
                        primary="Volunteer"
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button>
                  <ListItemText
                    primary="Contact"
                    secondary="Get in touch with us"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Tooltip title="Close menu">
        <Fab
          id="close"
          onClick={handleClick}
          style={{ position: "fixed", top: "1rem", right: "1rem" }}
        >
          <Close />
        </Fab>
      </Tooltip>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(NavMenu)
