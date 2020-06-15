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
import "moment/locale/de"
import "moment/locale/fr"
import "moment/locale/it"

import text from "./text"

const DogProfileSummary = props => {
  moment.locale(props.lang)
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const data = {
    location: [
      text.shelter[props.lang],
      text.foster[props.lang],
      text.other[props.lang],
    ],
    sex: [text.male[props.lang], text.female[props.lang]],
    yesNo: [text.no[props.lang], text.yes[props.lang], text.tbc[props.lang]],
  }
  return (
    <DogProfileExpansionPanel
      title={text.summary[props.lang]}
      headingVariant="h6"
      expanded
      expandOnMobile
    >
      <Grid container spacing={smUp ? 8 : 0} alignItems="flex-start">
        <Grid item xs={12} sm={6}>
          <DogProfileRow
            label={text.age[props.lang]}
            info={moment(props.dogData.date_of_birth).toNow(true)}
            first
          />
          <DogProfileRow
            label={text.breed[props.lang]}
            info={props.dogData.breed}
          />
          <DogProfileRow
            label={text.sex[props.lang]}
            info={data.sex[props.dogData.sex]}
          />
          <DogProfileRow
            label={text.ppp[props.lang]}
            info={data.yesNo[props.dogData.ppp]}
          />
          <DogProfileRow
            label={text.location[props.lang]}
            info={data.location[props.dogData.location]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DogProfileRow
            label={text.days_in_care[props.lang]}
            info={moment().diff(moment(props.dogData.date_entered), "days")}
            first={smUp ? true : false}
          />
          <DogProfileRow
            label={text.dog_friendly[props.lang]}
            info={data.yesNo[props.dogData.dog_friendly]}
          />
          <DogProfileRow
            label={text.cat_friendly[props.lang]}
            info={data.yesNo[props.dogData.cat_friendly]}
          />
          <DogProfileRow
            label={text.family_friendly[props.lang]}
            info={data.yesNo[props.dogData.family_friendly]}
          />
          <DogProfileRow
            label={text.sterilised[props.lang]}
            info={data.yesNo[props.dogData.sterilised]}
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
