import React from "react"
import { connect } from "react-redux"
import { setNoticeDialog } from "../redux/actions"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@material-ui/core"
import ReactMarkdown from "react-markdown"

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
      <DialogContent dividers>
        <ReactMarkdown
          source={props.notice.body}
          renderers={{
            paragraph: MyTypography,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{props.notice.btnText}</Button>
      </DialogActions>
    </Dialog>
  )
}

const MyTypography = ({ children }) => (
  <Typography paragraph>{children}</Typography>
)

const mapStateToProps = state => ({
  notice: state.noticeDialog,
})

export default connect(mapStateToProps)(NoticeDialog)
