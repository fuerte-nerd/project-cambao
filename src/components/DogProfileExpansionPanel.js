import React from "react"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

const DogProfileExpansionPanel = props => {
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
      style={{ margin: 0 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant={props.headingVariant}>{props.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default DogProfileExpansionPanel
