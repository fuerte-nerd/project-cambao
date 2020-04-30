import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3ba39c",
    },
    secondary: {
      main: "#f07937",
    },
    background: {},
    text: {
      light: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Sniglet",
  },
})

theme = responsiveFontSizes(theme)

export default theme
