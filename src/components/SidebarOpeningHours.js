import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Box } from "@material-ui/core"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarOpeningHours = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "sidebar" }
      ) {
        childMarkdownRemark {
          frontmatter {
            opening_hours {
              en
              es
            }
          }
        }
      }
    }
  `)
  return (
    <Box>
      <SidebarSectionTitle title="Opening hours" />
      <Typography display="block" variant="caption">
        Thursdays
      </Typography>
      <Typography display="block" paragraph>
        8:00 - 9:30
      </Typography>
      <Typography display="block" variant="caption">
        Weekends
      </Typography>
      <Typography display="block" paragraph>
        9:00 - 10:30
      </Typography>
      <Typography display="block" variant="caption">
        Holidays
      </Typography>
      <Typography display="block">9:00 - 10:30</Typography>
    </Box>
  )
}

export default connect(mapStateToProps)(SidebarOpeningHours)
