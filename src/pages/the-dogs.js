import React from "react"
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  withStyles,
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

const TheDogs = () => {
  const theme = useTheme()
  const DogImage = withStyles({
    cardImage: {
      [theme.breakpoints.down("sm")]: {
        height: 200,
      },
      [theme.breakpoints.up("md")]: {
        height: 400,
      },
    },
  })(CardMedia)

  const cardMediaHeight = {
    xs: 175,
    sm: 200,
    md: 300,
    lg: 400,
  }

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
            <DogImage image={tempImage} />
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
