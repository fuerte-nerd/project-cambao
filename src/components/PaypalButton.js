import React from "react"

const PaypalButton = () => {
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
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/ES/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_ES/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  )
}

export default PaypalButton
