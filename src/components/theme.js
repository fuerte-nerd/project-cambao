import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
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

theme = responsiveFontSizes(theme)

export default theme
