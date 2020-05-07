import React from "react"

const DogProfileExpansionPanel = props => {
  return (
    <ExpansionPanel square defaultExpanded={props.expanded ? true : false}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant={props.headingVariant}>{props.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default DogProfileExpansionPanel
