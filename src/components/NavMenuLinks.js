import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import {
  Box,
  Divider,
  List,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import NavMenuLinksItem from "./NavMenuLinksItem"
import NavMenuHelpUsSubmenu from "./NavMenuHelpUsSubmenu"

const NavMenuLinks = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            home {
              en
              es
            }
            subtitle_home {
              en
              es
            }
            help_us {
              en
              es
            }
            subtitle_help_us {
              en
              es
            }
            contact {
              en
              es
            }
            subtitle_contact {
              en
              es
            }
            who_are_we {
              en
              es
            }
            subtitle_who_are_we {
              en
              es
            }
            the_dogs {
              en
              es
            }
            subtitle_the_dogs {
              en
              es
            }
          }
        }
      }
    }
  `)
  const { frontmatter } = data.file.childMarkdownRemark

  const [helpUsOpen, setHelpUsOpen] = useState(false)
  const theme = useTheme()
  const isLandscapeMobile = useMediaQuery(
    "(max-width:800px) and (orientation: landscape)"
  )
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "help-us":
        return setHelpUsOpen(!helpUsOpen)
      default:
        return props.dispatch(setNav(false))
    }
  }
  useEffect(() => {
    if (!props.isOpen) {
      setHelpUsOpen(false)
    }
  }, [props.isOpen])
  return (
    <Box m={isLandscapeMobile ? "auto" : 0} width="90vw" maxWidth={400}>
      <Divider />
      <List disablePadding dense={isLargeScreen ? false : true}>
        <NavMenuLinksItem
          link="/"
          title={frontmatter.home[props.lang]}
          subtitle={frontmatter.subtitle_home[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="/the-dogs"
          title={frontmatter.the_dogs[props.lang]}
          subtitle={frontmatter.subtitle_the_dogs[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          link="/who-are-we"
          title={frontmatter.who_are_we[props.lang]}
          subtitle={frontmatter.subtitle_who_are_we[props.lang]}
          clickEvent={handleClick}
          divider
        />
        <NavMenuLinksItem
          id="help-us"
          link="#"
          title={frontmatter.help_us[props.lang]}
          subtitle={frontmatter.subtitle_help_us[props.lang]}
          clickEvent={handleClick}
          divider
          dropdown
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <NavMenuHelpUsSubmenu />
        </Collapse>
        <NavMenuLinksItem
          link="/contact"
          title={frontmatter.contact[props.lang]}
          subtitle={frontmatter.subtitle_contact[props.lang]}
          clickEvent={handleClick}
          divider
        />
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
  lang: state.siteLang,
})

export default connect(mapStateToProps)(NavMenuLinks)
