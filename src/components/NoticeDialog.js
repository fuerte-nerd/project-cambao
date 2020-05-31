import React from "react"
import { connect } from "react-redux"
import { setNoticeDialog } from "../redux/actions"
import { Dialog, DialogTitle, Typography, Button, Box } from "@material-ui/core"

const NoticeDialog = props => {
  const handleClose = () => {
    props.dispatch(
      setNoticeDialog({
        visible: false,
        heading: ``,
        body: ``,
        btnText: ``,
      })
    )
  }

  return (
    <Dialog open={props.notice.visible} maxWidth="md" onClose={handleClose}>
      <DialogTitle>{props.notice.heading}</DialogTitle>
      <Box p={3}>
        <Typography>{props.notice.body}</Typography>
        <Box mt={3}>
          <Button variant="outlined" fullWidth onClick={handleClose}>
            {props.notice.btnText}
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  notice: state.noticeDialog,
})

export default connect(mapStateToProps)(NoticeDialog)
