import React from "react"
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
  Box,
} from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileSummary = () => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <DogProfileExpansionPanel
      title="Summary"
      headingVariant="h6"
      expanded
      expandOnMobile
    >
      <Grid container spacing={smUp ? 8 : 0} alignItems="flex-start">
        <Grid item xs={12} sm={6}>
          <DogProfileRow label="Age" info="11 months" first />
          <DogProfileRow label="Breed" info="German Shepherd" />
          <DogProfileRow label="Sex" info="Female" />
          <DogProfileRow label="Licence required" info="Yes" />
          <DogProfileRow label="Location" info="Shelter" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DogProfileRow
            label="Time in care"
            info="3 months"
            first={smUp ? true : false}
          />
          <DogProfileRow label="Dog-friendly" info="Yes" />
          <DogProfileRow label="Cat-friendly" info="Yes" />
          <DogProfileRow label="Family-friendly" info="Yes" />
          <DogProfileRow label="Sterilized" info="Yes" />
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
export default DogProfileSummary
