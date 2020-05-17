import React from "react"
import { connect } from "react-redux"
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
  Box,
} from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import moment from "moment"
import "moment/locale/es"

const DogProfileSummary = props => {
  moment.locale(props.lang)
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const text = {
    labels: {
      summary: {
        en: "Summary",
        es: "Resumen",
      },
      age: {
        en: "Age",
        es: "Edad",
      },
      breed: { en: "Breed", es: "Raza" },
      sex: { en: "Sex", es: "Sexo" },
      ppp: { en: "Licence required", es: "Requiere licencia" },
      location: { en: "Location", es: "Ubicación" },
      days_in_care: { en: "Days in care", es: "Días en cuidado" },
      dog_friendly: { en: "Dog-friendly?", es: "¿Con los perros?" },
      cat_friendly: { en: "Cat-friendly?", es: "¿Con los gatos?" },
      family_friendly: {
        en: "Family-friendly?",
        es: "¿Con los niños?",
      },
      sterilised: { en: "Sterilised?", es: "¿Esterilizado?" },
    },
    data: {
      location: {
        en: ["Shelter", "Foster", "Other"],
        es: ["Perrera", "Casa de acogida", "Otra"],
      },
      sex: {
        en: ["Male", "Female"],
        es: ["Macho", "Hembra"],
      },
      yesNo: {
        en: ["No", "Yes", "TBC"],
        es: ["No", "Sí", "Por confirmar"],
      },
    },
  }
  return (
    <DogProfileExpansionPanel
      title={text.labels.summary[props.lang]}
      headingVariant="h6"
      expanded
      expandOnMobile
    >
      <Grid container spacing={smUp ? 8 : 0} alignItems="flex-start">
        <Grid item xs={12} sm={6}>
          <DogProfileRow
            label={text.labels.age[props.lang]}
            info={moment(props.data.date_of_birth).toNow(true)}
            first
          />
          <DogProfileRow
            label={text.labels.breed[props.lang]}
            info={props.data.breed}
          />
          <DogProfileRow
            label={text.labels.sex[props.lang]}
            info={text.data.sex[props.lang][props.data.sex]}
          />
          <DogProfileRow
            label={text.labels.ppp[props.lang]}
            info={text.data.yesNo[props.lang][props.data.ppp]}
          />
          <DogProfileRow
            label={text.labels.location[props.lang]}
            info={text.data.location[props.lang][props.data.location]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DogProfileRow
            label={text.labels.days_in_care[props.lang]}
            info={moment().diff(moment(props.data.date_entered), "days")}
            first={smUp ? true : false}
          />
          <DogProfileRow
            label={text.labels.dog_friendly[props.lang]}
            info={text.data.yesNo[props.lang][props.data.dog_friendly]}
          />
          <DogProfileRow
            label={text.labels.cat_friendly[props.lang]}
            info={text.data.yesNo[props.lang][props.data.cat_friendly]}
          />
          <DogProfileRow
            label={text.labels.family_friendly[props.lang]}
            info={text.data.yesNo[props.lang][props.data.family_friendly]}
          />
          <DogProfileRow
            label={text.labels.sterilised[props.lang]}
            info={text.data.yesNo[props.lang][props.data.sterilised]}
          />
        </Grid>
      </Grid>
    </DogProfileExpansionPanel>
  )
}

const DogProfileRow = props => {
  return (
    <Grid container alignItems="flex-end">
      <Grid item xs={6}>
        <Box py={0.5} borderBottom={1}>
          <Typography variant="overline">{props.label}</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box py={0.5} borderBottom={1}>
          <Typography variant="body2" align="right">
            {props.info}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(DogProfileSummary)
