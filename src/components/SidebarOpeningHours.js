import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Box } from "@material-ui/core"
import SidebarSectionTitle from "./SidebarSectionTitle"
import text from "./text"

const SidebarOpeningHours = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "hours" }
      ) {
        childMarkdownRemark {
          frontmatter {
            thursdays
            weekends
            holidays
          }
        }
      }
    }
  `)
  const {
    thursdays,
    weekends,
    holidays,
  } = data.file.childMarkdownRemark.frontmatter

  return (
    <Box>
      <SidebarSectionTitle title={text.hoursHeading[props.lang]} />
      <Typography display="block" variant="caption">
        {text.thursdays[props.lang]}
      </Typography>
      <Typography display="block" paragraph>
        {thursdays}
      </Typography>
      <Typography display="block" variant="caption">
        {text.weekends[props.lang]}
      </Typography>
      <Typography display="block" paragraph>
        {weekends}
      </Typography>
      <Typography display="block" variant="caption">
        {text.holidays[props.lang]}
      </Typography>
      <Typography display="block">{holidays}</Typography>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarOpeningHours)
