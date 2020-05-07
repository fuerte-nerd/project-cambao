import React from "react"
import {
  useTheme,
  useMediaQuery,
  Hidden,
  IconButton,
  Box,
  Typography,
  Grid,
} from "@material-ui/core"
import { Share, MoreVert } from "@material-ui/icons"

import DogProfilePhotoGallery from "../components/DogProfilePhotoGallery"
import DogProfileSummary from "../components/DogProfileSummary"
import DogProfileVideo from "../components/DogProfileVideo"
import DogProfileDescription from "../components/DogProfileDescription"
import DogProfileFAQs from "../components/DogProfileFAQs"

const Dog = () => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box>
      <Grid container spacing={mdUp ? 1 : 0}>
        <Grid item xs={12} md={4}>
          <Hidden mdUp>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="white"
              p={1}
            >
              <Box color="primary.dark">
                <Typography variant="h2">Timanfaya</Typography>
              </Box>
              <Box>
                <IconButton edge="end">
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Hidden>
          <DogProfilePhotoGallery />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box px={mdUp ? 2 : 0}>
            <Grid container spacing={0} alignItems="center">
              <Hidden smDown>
                <Grid item xs={12}>
                  <Box
                    display={smUp ? "flex" : "block"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box color="white">
                      <Typography variant="h2">Timanfaya</Typography>
                    </Box>
                    <Box>
                      <IconButton edge="start">
                        <Share />
                      </IconButton>
                      <IconButton edge="end">
                        <MoreVert />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Hidden>
              <Grid item xs={12}>
                <DogProfileSummary />
              </Grid>
              <Grid item xs={12}>
                <DogProfileVideo />
              </Grid>
              <Grid item>
                <DogProfileDescription />
              </Grid>
              <Grid item xs={12}>
                <DogProfileFAQs />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dog
