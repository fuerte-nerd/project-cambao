import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@material-ui/core"

import PaypalButton from "./PaypalButton"

import text from "./text"

const DonateDialog = props => {
  const handleClose = () => {
    props.dispatch(setDonateDialog(false))
  }

  return (
    <Dialog open={props.isOpen} maxWidth="md" onClose={handleClose}>
      <DialogTitle>{text.donateNowHeading[props.lang]}</DialogTitle>
      <DialogContent dividers>
        <Typography>{text.donateDialogBody[props.lang]}</Typography>
        <Box fullWidth m={3} align="center">
          <PaypalButton />
        </Box>
        <Box mt={3} fullWidth align="center">
          <Typography display="block" variant="subtitle2">
            <strong>{text.bank[props.lang]}:</strong> Sabadell
          </Typography>
          <Typography display="block" variant="subtitle2">
            <strong>{text.accountName[props.lang]}:</strong> Asociación
            Fuerteventura Dog Rescue
          </Typography>
          <Typography display="block" variant="subtitle2">
            <strong>IBAN:</strong> ES34 0081 0545 5500 0141 9442
          </Typography>
          <Typography display="block" variant="subtitle2">
            <strong>SWIFT/BIC:</strong> BSAB ESBB
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="caption">
            *{text.donateDialogCashClause[props.lang]}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{text.close[props.lang]}</Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  isOpen: state.donateDialog,
})

export default connect(mapStateToProps)(DonateDialog)
