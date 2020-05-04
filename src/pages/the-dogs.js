import React from "react"
import {
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
            <CardMedia image={tempImage} />
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
