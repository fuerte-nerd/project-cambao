import React from "react"
import {
  useTheme,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

const DogProfileExpansionPanel = props => {
  const theme = useTheme()
  const expandedThreshold = 824
  return (
    <ExpansionPanel
      square
      defaultExpanded={
        props.expanded
          ? window.innerWidth > expandedThreshold
            ? true
            : false
          : false
      }
      style={{
        margin: 0,
        border: `1px solid ${theme.palette.text.secondary}`,
        borderBottom: props.last ? 0 : 1,
        paddingBottom: props.youtube ? "56.25%" : 16,
        position: props.youtube ? "relative" : "inherit",
      }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant={props.headingVariant}>{props.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default DogProfileExpansionPanel
