import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Box, List, ListItem, ListItemText } from "@material-ui/core"
import InternalLink from "./InternalLink"

const SidebarQuickLinksSubmenu = props => {
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
    <Box p={1} bgcolor="#fafafa">
      <List dense disablePadding>
        <InternalLink to="/adopt">
          <ListItem button>
            <ListItemText primary={frontmatter.adopt[props.lang]} />
          </ListItem>
        </InternalLink>

        <InternalLink to="/foster">
          <ListItem button>
            <ListItemText primary={frontmatter.foster[props.lang]} />
          </ListItem>
        </InternalLink>
        <InternalLink to="/donate">
          <ListItem button>
            <ListItemText primary={frontmatter.donate[props.lang]} />
          </ListItem>
        </InternalLink>
        <InternalLink to="/volunteer">
          <ListItem button>
            <ListItemText primary={frontmatter.volunteer[props.lang]} />
          </ListItem>
        </InternalLink>
      </List>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarQuickLinksSubmenu)
