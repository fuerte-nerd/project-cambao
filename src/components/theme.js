import { fdr_orange, fdr_blue } from "../../colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let rawTheme = createMuiTheme({
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

theme = responsiveFontSizes(rawTheme)

export const rawTheme
export default theme
