import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Box, Typography, Button } from "@material-ui/core"
import { EuroSymbol } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"
import text from "./text"

const SidebarDonate = props => {
  return (
    <Box>
      <SidebarSectionTitle title={text.donateNowHeading[props.lang]} />
      <Box pb={2}>
        <Typography variant="caption" align="justify">
          {text.donateNowIntro[props.lang]}
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            startIcon={<EuroSymbol />}
            onClick={() => props.dispatch(setDonateDialog(true))}
          >
            {text.donate[props.lang]}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarDonate)
