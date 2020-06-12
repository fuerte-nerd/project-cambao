import React from "react"
import { connect } from "react-redux"
import { setPopup } from "../redux/actions"
import { navigate, useStaticQuery, graphql } from "gatsby"
import {
  Button,
  Divider,
  useTheme,
  makeStyles,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"
import { Share, Info } from "@material-ui/icons"
import text from "./text"

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
  const { lang, name, summary } = props
  const theme = useTheme()
  const classes = useStyles()

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "share":
        return props.dispatch(
          setPopup({
            visible: true,
            href: `${data.site.siteMetadata.url}/${lang}/dogs${props.slug}`,
            title: props.name + " | Fuerteventura Dog Rescue",
          })
        )

      default:
        navigate(`${lang}/dogs/${props.slug}`)
    }
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia image={props.image} className={classes.cardImage} />

        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Divider style={{ margin: ".5rem 0" }} />
          <Typography variant="body2">{summary}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ background: theme.palette.secondary.main, color: "#fafafa" }}
      >
        <Button color="inherit" startIcon={<Info />} onClick={handleClick}>
          {lang ? text.moreInfo[lang] : ""}
        </Button>
        <Button
          color="inherit"
          startIcon={<Share />}
          onClick={handleClick}
          id="share"
        >
          {lang ? text.share[lang] : ""}
        </Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(DogListing)
