import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import {
  Button,
  Divider,
  useTheme,
  Box,
  makeStyles,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"
import { Share, Info } from "@material-ui/icons"

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
const DogListing = props => {
  const theme = useTheme()
  const classes = useStyles()

  const handleClick = e => {
    switch (e.currentTarget.id) {
      default:
        navigate(`/dogs/${props.lang + props.slug}`)
    }
  }

  const text = {
    more: {
      en: "More info",
      es: "Más info",
    },
    share: { en: "Share", es: "Comparte" },
  }
  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia image={props.image} className={classes.cardImage} />

        <CardContent>
          <Typography variant="h3">{props.name}</Typography>
          <Divider style={{ margin: ".5rem 0" }} />
          <Typography variant="body2">{props.summary}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ background: theme.palette.secondary.main, color: "#fafafa" }}
      >
        <Button color="inherit" startIcon={<Info />} onClick={handleClick}>
          {text.more[props.lang]}
        </Button>
        <Button color="inherit" startIcon={<Share />}>
          {text.share[props.lang]}
        </Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(DogListing)
