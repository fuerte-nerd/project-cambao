import React from "react"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import { InlineIcon } from "@iconify/react"
import PayPal from "@iconify/icons-simple-icons/paypal"
import text from "./text"

const PaypalButton = props => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="cmd" value="_donations" />
      <input
        type="hidden"
        name="business"
        value="info@fuerteventuradogrescue.org"
      />
      <input type="hidden" name="currency_code" value="EUR" />
      <Button
        variant="contained"
        type="submit"
        startIcon={<InlineIcon icon={PayPal} />}
      >
        {text.donateViaPaypal[props.lang]}
      </Button>
    </form>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(PaypalButton)
