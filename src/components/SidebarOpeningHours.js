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
  const { frontmatter } = data.file.childMarkdownRemark

  const text = {
    thurs: {
      en: "Thursdays",
      es: "Jueves",
    },
    weekends: {
      en: "Weekends",
      es: "Fines de semana",
    },
    holidays: {
      en: "Pubic holidays",
      es: "Días festivos",
    },
  }
  return (
    <Box>
      <SidebarSectionTitle title={frontmatter.opening_hours[props.lang]} />
      <Typography display="block" variant="caption">
        {text.thurs[props.lang]}
      </Typography>
      <Typography display="block" paragraph>
        8:00 - 9:30
      </Typography>
      <Typography display="block" variant="caption">
        {text.weekends[props.lang]}
      </Typography>
      <Typography display="block" paragraph>
        9:00 - 10:30
      </Typography>
      <Typography display="block" variant="caption">
        {text.holidays[props.lang]}
      </Typography>
      <Typography display="block">9:00 - 10:30</Typography>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarOpeningHours)
