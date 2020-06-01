import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { Box, CircularProgress } from "@material-ui/core"

const IndexPage = props => {
  useEffect(() => {}, [])
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={80} />
    </Box>
  )
}

export default connect()(IndexPage)
