import React from "react"
import { connect } from "react-redux"
import { ListItemText, Grid, Box, Typography } from "@material-ui/core"
import LocationMap from "./LocationMap"

const text = {
  headings: {
    location: {
      en: "Where are we?",
      es: "¿Donde estamos?",
    },
    hours: {
      en: "Opening hours",
      es: "Horarios",
    },
  },
  spain: {
    en: "Spain",
    es: "España",
  },
  opening: {
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
  },
  small: {
    charity: {
      en: "Registered Charity in the Canary Islands since April 2013",
      es:
        "Sociedad benéfica registrada en las Islas Canarias desde abril de 2013",
    },
    copyright: {
      en: "All content",
      es: "Todos los contenidos",
    },
    website_by: {
      en: "Website by",
      es: "Sitio web de",
    },
  },
}

const Footer = props => {
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
            {text.headings.location[props.lang]}
          </Typography>
          <LocationMap />
          <Box mt={2}>
            <Typography display="block">Fuerteventura Dog Rescue</Typography>
            <Typography display="block">Ayuntamiento de La Oliva</Typography>
            <Typography display="block">Calle Juan Cabrera Méndez</Typography>
            <Typography display="block">La Oliva</Typography>
            <Typography display="block">Fuerteventura</Typography>
            <Typography display="block">{text.spain[props.lang]}</Typography>
          </Box>
        </Box>

        <Box pb={4}>
          <Typography variant="h4" paragraph>
            {text.headings.hours[props.lang]}
          </Typography>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.opening.thurs[props.lang]}
                secondary="8:00 - 9:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.opening.weekends[props.lang]}
                secondary="9:00 - 10:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary={text.opening.holidays[props.lang]}
                secondary="9:00 - 10:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Typography display="block" variant="caption">
          {text.small.charity[props.lang]}
          {` `}
          (G1/S1/19399-13/F)
        </Typography>
        <Typography display="block" variant="caption">
          {text.small.copyright[props.lang]}
          {` `}&copy; 2020
          {new Date().getFullYear() === 2020
            ? ` `
            : ` - ${new Date().getFullYear()}`}{" "}
          Fuerteventura Dog Rescue
        </Typography>
        <Typography display="block" variant="caption">
          {text.small.website_by[props.lang]}
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
