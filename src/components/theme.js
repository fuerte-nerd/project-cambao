import { fdr_orange, fdr_blue } from "../../colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: fdr_blue,
      contrastText: "#fafafa",
    },
    secondary: {
      main: fdr_orange,
    },
    background: {},
    text: {},
  },
  typography: {
    fontFamily: "Sniglet",
  },
})

theme = responsiveFontSizes(theme)

export default theme
