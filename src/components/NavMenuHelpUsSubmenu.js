import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Box, List } from "@material-ui/core"
import NavMenuHelpUsSubmenuItem from "./NavMenuHelpUsSubmenuItem"

const NavMenuHelpUsSubmenu = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            adopt {
              en
              es
            }
            foster {
              en
              es
            }
            donate {
              en
              es
            }
            volunteer {
              en
              es
            }
          }
        }
      }
    }
  `)
  const { frontmatter } = data.file.childMarkdownRemark
  return (
    <Box bgcolor="#fafafa">
      <List dense disablePadding>
        <NavMenuHelpUsSubmenuItem
          title={frontmatter.adopt[props.lang]}
          id="adopt"
          link="/adopt"
        />
        <NavMenuHelpUsSubmenuItem
          title={frontmatter.foster[props.lang]}
          id="foster"
          link="/foster"
        />
        <NavMenuHelpUsSubmenuItem
          title={frontmatter.donate[props.lang]}
          id="donate"
          link="/donate"
        />
        <NavMenuHelpUsSubmenuItem
          title={frontmatter.volunteer[props.lang]}
          id="volunteer"
          link="/volunteer"
        />
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(NavMenuHelpUsSubmenu)
