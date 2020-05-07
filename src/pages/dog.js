import React from "react"
import {
  useTheme,
  useMediaQuery,
  Hidden,
  IconButton,
  Box,
  Typography,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core"
import { Share, ExpandMore, MoreVert } from "@material-ui/icons"
import InternalLink from "../components/InternalLink"

import DogProfileExpansionPanel from "../components/DogProfileExpansionPanel"

import DogProfilePhotoGallery from "../components/DogProfilePhotoGallery"
import DogProfileSummary from "../components/DogProfileSummary"

const Dog = () => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))
  const expandedThreshold = 800

  return (
    <Box>
      <Grid container spacing={mdUp ? 1 : 0}>
        <Grid item xs={12} md={4}>
          <Hidden mdUp>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="#fafafa"
              p={1}
            >
              <Box color="primary.dark">
                <Typography variant="h2">Timanfaya</Typography>
              </Box>
              <Box>
                <IconButton edge="end">
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Hidden>
          <DogProfilePhotoGallery />
          <Box
            bgcolor={mdUp ? "transparent" : "#fafafa"}
            color={mdUp ? "#fafafa" : "inherit"}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box px={mdUp ? 2 : 0}>
            <Grid container spacing={0} alignItems="center">
              <Hidden smDown>
                <Grid item xs={12}>
                  <Box
                    display={smUp ? "flex" : "block"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box color="white">
                      <Typography variant="h2">Timanfaya</Typography>
                    </Box>
                    <Box>
                      <IconButton edge="start">
                        <Share />
                      </IconButton>
                      <IconButton edge="end">
                        <MoreVert />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Hidden>
              <Grid item xs={12}>
                <DogProfileSummary />

                <ExpansionPanel
                  square
                  defaultExpanded
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderBottom: 0,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">Summary</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ background: "#fafafa" }}
                  ></ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanel
                  square
                  defaultExpanded={
                    window.innerWidth > expandedThreshold ? true : false
                  }
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderBottom: 0,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">Video</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ paddingBottom: "56.25%", position: "relative" }}
                  >
                    <iframe
                      title="Video of dog"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/DgAw6jFo6Mw"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item>
                <ExpansionPanel
                  square
                  defaultExpanded
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderBottom: 0,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">Description</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="subtitle1" align="justify">
                      Lorem a dolor possimus minus magnam? Magnam modi at alias
                      exercitationem temporibus? Accusamus laudantium nihil
                      dolores blanditiis numquam Optio corporis neque tenetur
                      quam animi a Assumenda atque quisquam asperiores quae
                      deleniti. Repellat dolor voluptate iure tempore laborum Ex
                      quasi consectetur cupiditate illum nihil eius Voluptate
                      laborum ipsum minus dolorem dolore.\n\n Adipisicing ad
                      nobis debitis eius velit Cum expedita nostrum quidem
                      delectus quo id Id tempora beatae id soluta error? Odio in
                      et expedita aperiam quas velit Vitae facere reiciendis
                      accusamus consequatur eos distinctio! Officia sunt debitis
                      voluptate accusantium recusandae Quisquam ratione
                      accusamus placeat animi ex fuga? Veritatis velit earum
                      nulla!
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanel
                  square
                  defaultExpanded={
                    window.innerWidth > expandedThreshold ? true : false
                  }
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderBottom: 0,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">
                      "I'm interested in adopting Timanfaya..."
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="subtitle1" align="justify">
                      Fantastic! You can find further information about the
                      adoption process{" "}
                      <InternalLink to="/adopt">here</InternalLink>.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanel
                  square
                  defaultExpanded={
                    window.innerWidth > expandedThreshold ? true : false
                  }
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderBottom: 0,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">
                      "I'm interested in fostering Timanfaya..."
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="subtitle1" align="justify">
                      Fantastic! You can find further information about the
                      fostering process{" "}
                      <InternalLink to="/foster">here</InternalLink>.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanel
                  square
                  defaultExpanded={
                    window.innerWidth > expandedThreshold ? true : false
                  }
                  style={{
                    border: `1px solid ${theme.palette.text.secondary}`,
                  }}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">
                      "I'd like to help with Timanfaya's costs..."
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="subtitle1" align="justify">
                      That's very kind! Thank you. You can find further
                      information about donating
                      <InternalLink to="/donate">here</InternalLink>.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dog
