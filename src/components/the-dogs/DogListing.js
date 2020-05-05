import React from "react"
import {
  Box,
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Table,
  TableHead,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Paper,
} from "@material-ui/core"
import { Share } from "@material-ui/icons"
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
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={tempImage} className={classes.cardImage} />
        <CardContent>
          <Typography align="center" variant="h3">
            Buddy
          </Typography>

          <Grid container justify="space-between">
            <Grid item xs={6} sm={3}>
              <ListItemText
                primary="Age"
                secondary="11 months"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <ListItemText
                primary="Sex"
                secondary="Female"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItemText
                primary="Breed"
                secondary="German Shepherd"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box align="end" fullWidth display="flex" alignItems="center">
          <IconButton>
            <Share />
          </IconButton>
          <Button>More info</Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export default DogListing
