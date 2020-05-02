import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let rawTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3ba39c",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#f07937",
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
