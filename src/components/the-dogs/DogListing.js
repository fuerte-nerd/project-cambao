import React from "react"
import {
  Hidden,
  useTheme,
  Box,
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  ListItemText,
  IconButton,
} from "@material-ui/core"
import { Share, Info } from "@material-ui/icons"
import tempImage from "../../images/test.jpg"

const useStyles = makeStyles(theme => ({
  cardImage: {
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
    [theme.breakpoints.up("sm")]: {
      height: 350,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
  },
  ageWidth: {
    [theme.breakpoints.down("xs")]: {
      width: "40%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  breedWidth: {
    [theme.breakpoints.down("xs")]: {
      width: "40%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },
  },
  sexWidth: {
    [theme.breakpoints.down("xs")]: {
      width: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "15%",
    },
  },
  dataRow: {
    [theme.breakpoints.down("xs")]: {
      minHeight: 40,
    },
  },
}))
const DogListing = () => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={tempImage} className={classes.cardImage} />
        <CardContent>
          <Typography align="center" variant="h3">
            Buddy
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ background: theme.palette.secondary.main, color: "#fafafa" }}
      >
        <Box
          align="end"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton color="inherit">
            <Share />
          </IconButton>
          <IconButton color="inherit">
            <Info />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default DogListing
