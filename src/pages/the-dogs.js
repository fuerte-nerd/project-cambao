import React from "react"
import {
  makeStyles,
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core"
import SEO from "../components/seo"

import tempImage from "../images/test.jpg"

const useStyles = makeStyles(theme => ({
  cardImage: {
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
  },
}))

const TheDogs = () => {
  const classes = useStyles()

  const imageHeight = () => {}

  return (
    <>
      <SEO title="The Dogs" />
      <Typography variant="h2">The Dogs</Typography>
      <Typography variant="subtitle1">
        We have lots of dogs waiting for their forever home. Come and meet them!
        They can't wait to meet you!
      </Typography>
      <Box>
        <Card>
          <CardActionArea>
            <CardMedia image={tempImage} className={classes.cardImage} />
            <CardContent>
              <CardHeader>Buddy</CardHeader>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

export default TheDogs
