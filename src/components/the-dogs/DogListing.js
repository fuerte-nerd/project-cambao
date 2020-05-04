import React from "react"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import tempImage from "../../images/test.jpg"

const useStyles = makeStyles(theme => ({
  cardImage: {
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
    [theme.breakpoints.up("sm")]: {
      height: 400,
    },
  },
}))
const DogListing = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={tempImage} className={classes.cardImage} />
        <CardContent>
          <CardHeader>Buddy</CardHeader>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DogListing
