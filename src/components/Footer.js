import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { ListItemText, Grid, Box, Typography } from "@material-ui/core"
import LocationMap from "./LocationMap"
import text from "./text"

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        name: { eq: "hours" }
        sourceInstanceName: { eq: "static_content" }
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
    <Box
      mt={2}
      py={4}
      bgcolor="secondary.main"
      color="#fafafa"
      align="center"
      boxShadow={6}
    >
      <Box p={2}>
        <Box pb={4}>
          <Typography variant="h4" paragraph>
            {text.locationHeading[props.lang]}
          </Typography>
          <LocationMap />
          <Box mt={2}>
            <Typography display="block">Fuerteventura Dog Rescue</Typography>
            <Typography display="block">Ayuntamiento de La Oliva</Typography>
            <Typography display="block">Calle Juan Cabrera Méndez</Typography>
            <Typography display="block">La Oliva</Typography>
            <Typography splay="block">Fuerteventura</Typography>
            <Typography display="block">{text.spain[props.lang]}</Typography>
          </Box>
        </Box>

        <Box pb={4}>
          <Typography variant="h4" paragraph>
            {text.hoursHeading[props.lang]}
          </Typography>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.thursdays[props.lang]}
                secondary={thursdays}
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.weekends[props.lang]}
                secondary={weekends}
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.holidays[props.lang]}
                secondary={holidays}
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Typography display="block" variant="caption">
          {text.registeredCharity[props.lang]}
        </Typography>
        <Typography display="block" variant="caption">
          (G1/S1/19399-13/F)
        </Typography>
        <Typography display="block" variant="caption">
          {text.copyright[props.lang]}
          {` `}&copy; 2020
          {new Date().getFullYear() === 2020
            ? ` `
            : ` - ${new Date().getFullYear()}`}{" "}
          Fuerteventura Dog Rescue
        </Typography>
        <Typography display="block" variant="caption">
          {text.websiteBy[props.lang]}
          {` `}dandroos
        </Typography>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(Footer)
