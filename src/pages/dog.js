import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  useTheme,
  makeStyles,
  useMediaQuery,
  Hidden,
  IconButton,
  Divider,
  Box,
  Typography,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core"
import { Share, Comment, ExpandMore } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  headerButtons: {
    [theme.breakpoints.down("xs")]: {
      padding: "6px",
    },
  },
  headerButtonsIcons: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
}))

const Dog = () => {
  const classes = useStyles()
  const theme = useTheme()
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 425, quality: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))

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
                <Typography variant="h2">Buddy</Typography>
              </Box>
              <Box>
                <IconButton className={classes.headerButtons}>
                  <Share className={classes.headerButtonsIcons} />
                </IconButton>
                <IconButton className={classes.headerButtons}>
                  <FacebookMessenger className={classes.headerButtonsIcons} />
                </IconButton>
                <IconButton className={classes.headerButtons}>
                  <Comment className={classes.headerButtonsIcons} />
                </IconButton>
              </Box>
            </Box>
          </Hidden>
          <Img fluid={data.dog1.childImageSharp.fluid} />
          <Box
            bgcolor={mdUp ? "transparent" : "#fafafa"}
            color={mdUp ? "#fafafa" : "inherit"}
          >
            <ExpansionPanel square defaultExpanded={mdUp ? true : false}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box p={mdUp ? 2 : 0}>
            <Grid container spacing={mdUp ? 2 : 0} alignItems="center">
              <Hidden smDown>
                <Grid item xs={12}>
                  <Box
                    display={smUp ? "flex" : "block"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box color="white">
                      <Typography variant="h2">Buddy</Typography>
                    </Box>
                    <Box>
                      <IconButton edge="start">
                        <Share />
                      </IconButton>
                      <IconButton>
                        <FacebookMessenger />
                      </IconButton>
                      <IconButton edge="end">
                        <Comment />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Hidden>
              <Grid item xs={12}>
                <ExpansionPanel square defaultExpanded>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">Summary</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid
                      container
                      spacing={smUp ? 8 : 0}
                      alignItems="flex-start"
                    >
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
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanel square defaultExpanded={mdUp ? true : false}>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">Video</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ paddingBottom: "56.25%", position: "relative" }}
                  >
                    <iframe
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
                <ExpansionPanel square defaultExpanded={mdUp ? true : false}>
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
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
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

export default Dog
