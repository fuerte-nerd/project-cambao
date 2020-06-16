import React from "react"
import { Helmet } from "react-helmet"
import { Provider } from "react-redux"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import store from "./src/redux/store"
import siteTheme from "./src/components/theme"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={siteTheme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Sniglet&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  )
}
