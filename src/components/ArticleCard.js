import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import {
  useTheme,
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core"
import { LocalLibrary } from "@material-ui/icons"
import moment from "moment"
import "moment/locale/es"
import "moment/locale/de"
import "moment/locale/fr"
import "moment/locale/it"
import text from "./text"

const ArticleCard = props => {
  const { lang } = props
  const theme = useTheme()
  moment.locale(lang)

  const handleClick = () => {
    navigate(`/${lang}/articles${props.slug}`)
  }
  return (
    <Box mb={3}>
      <Card>
        <CardActionArea onClick={handleClick}>
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <CardMedia
                style={{ width: "100%", height: 400 }}
                image={props.image}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <CardContent>
                <Typography variant="h3">{props.title}</Typography>
                <Typography variant="overline">
                  {moment(props.date).format("dddd D MMMM YYYY")}
                </Typography>
                <Box mb={2}>
                  <Divider />
                </Box>

                <Typography variant="body1" align="justify" paragraph>
                  {props.excerpt}
                </Typography>
                <Box align="right" width="100%"></Box>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
        <CardActions
          style={{ background: theme.palette.secondary.main, color: "white" }}
        >
          <Button
            onClick={handleClick}
            color="inherit"
            startIcon={<LocalLibrary />}
          >
            {lang ? text.readMore[lang] : ""}
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(ArticleCard)
