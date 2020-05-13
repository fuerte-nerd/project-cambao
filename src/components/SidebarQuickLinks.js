import React, { useState } from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { List, Collapse } from "@material-ui/core"

import SidebarSectionTitle from "./SidebarSectionTitle"
import SidebarQuickLinksItem from "./SidebarQuickLinksItem"
import SidebarQuickLinksSubmenu from "./SidebarQuickLinksSubmenu"

const SidebarQuickLinks = props => {
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
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            the_dogs {
              en
              es
            }
            contact {
              en
              es
            }
            help_us {
              en
              es
            }
            home {
              en
              es
            }
            who_are_we {
              en
              es
            }
          }
        }
      }
    }
  `)
  const { frontmatter } = data.file.childMarkdownRemark
  const text = {
    quick_navigation: {
      en: "Quick Navigation",
      es: "Navegación rápida",
    },
  }
  return (
    <>
      <SidebarSectionTitle title={text.quick_navigation[props.lang]} top />
      <List disablePadding dense>
        <SidebarQuickLinksItem
          label={frontmatter.home[props.lang]}
          id="home"
          link="/"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={frontmatter.the_dogs[props.lang]}
          id="the-dogs"
          link="/the-dogs"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={frontmatter.who_are_we[props.lang]}
          id="who-are-we"
          link="/who-are-we"
          clickEvent={handleClick}
        />
        <SidebarQuickLinksItem
          label={frontmatter.help_us[props.lang]}
          id="help-us"
          clickEvent={handleClick}
          dropdown
          isOpen={helpUsOpen}
        />
        <Collapse in={helpUsOpen}>
          <SidebarQuickLinksSubmenu />
        </Collapse>
        <SidebarQuickLinksItem
          label={frontmatter.contact[props.lang]}
          id="contact"
          link="/contact"
          clickEvent={handleClick}
        />
      </List>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarQuickLinks)
