import React from "react"

const DogProfileExpansionPanel = () => {
  return (
    <ExpansionPanel
      square
      defaultExpanded={window.innerWidth > expandedThreshold ? true : false}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant="body2">More photos</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={smUp ? 1 : 0}>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2}>
            <Img fluid={data.thumb.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default DogProfileExpansionPanel
