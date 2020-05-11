import React from "react"
import { connect } from "react-redux"
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

const ArticleCard = props => {
  const theme = useTheme()
  const excerpt = props.body.split(" ", 50).join(" ")
  moment.locale(props.lang)
  return (
    <Box mb={1}>
      <Card>
        <CardActionArea>
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

                <Typography align="justify" paragraph>
                  {excerpt}...
                </Typography>
                <Box align="right" width="100%"></Box>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
        <CardActions
          style={{ background: theme.palette.secondary.main, color: "white" }}
        >
          <Button color="inherit" startIcon={<LocalLibrary />}>
            Read more
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
