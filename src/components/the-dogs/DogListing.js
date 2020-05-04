import React from "react"
import {
  makeStyles,
  Card,
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
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core"
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
}))
const DogListing = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={tempImage} className={classes.cardImage} />
        <CardContent>
          <Typography variant="h3">Buddy</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Age</TableCell>
                  <TableCell>Breed</TableCell>
                  <TableCell>Sex</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>6 months</TableCell>
                  <TableCell>German Shepherd</TableCell>
                  <TableCell>Male</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <List dense>
            <ListItem>
              <ListItemText primary="Age" secondary="6 months" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Breed" secondary="Bardino" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sex" secondary="Male" />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DogListing
