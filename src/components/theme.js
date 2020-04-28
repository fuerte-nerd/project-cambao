import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#52bbb4",
    },
    secondary: {
      main: "#f07937",
    },
    background: {},
  },
})

theme = responsiveFontSizes(theme)

export default theme
