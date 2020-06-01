import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Dialog, DialogTitle, Typography, Button, Box } from "@material-ui/core"

import PaypalButton from "./PaypalButton"

const DonateDialog = props => {
  const handleClose = () => {
    props.dispatch(setDonateDialog(false))
  }

  const text = {
    heading: { en: "Donate to FDR", es: "Donar a FDR" },
    body: {
      en: "You can make donations to us by cash*, PayPal or by bank transfer.",
      es:
        "Puede hacernos donaciones en efectivo*, PayPal o transferencia bancaria.",
    },
    cash: {
      en:
        "Please visit us during the shelter opening hours to make cash donations.  Thank you.",
      es:
        "Por favor, visítenos durante el horario de apertura de la perrera para hacer donaciones en efectivo.  Gracias.",
    },
    close: {
      en: "Close",
      es: "Cerrar",
    },
  }

  return (
    <Dialog open={props.isOpen} maxWidth="md" onClose={handleClose}>
      <DialogTitle>{text.heading[props.lang]}</DialogTitle>
      <Box p={3}>
        <Typography>{text.body[props.lang]}</Typography>
        <Box fullWidth m={3} align="center">
          <PaypalButton />
        </Box>
        <Box mt={3} fullWidth align="center">
          <Typography variant="subtitle2">
            <strong>IBAN:</strong> ES34 0081 0545 5500 0141 9442
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="caption">*{text.cash[props.lang]}</Typography>
        </Box>
        <Box mt={3}>
          <Button variant="outlined" fullWidth onClick={handleClose}>
            {text.close[props.lang]}
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  isOpen: state.donateDialog,
})

export default connect(mapStateToProps)(DonateDialog)
