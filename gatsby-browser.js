import React from "react"
import wrapWithProvider from "./wrap-with-provider"
import Layout from "./src/components/layout"

export const wrapRootElement = wrapWithProvider
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// const transitionDelay = 500

// export const wrapPageElement = ({ element, props }) => {
//  return <Layout {...props}>{element}</Layout>
//}

//export const shouldUpdateScroll = ({
//  routerProps: { location },
//  getSavedScrollPosition,
//}) => {
//  if (location.action === "PUSH") {
//    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
//  } else {
//    const savedPosition = getSavedScrollPosition(location)
//    window.setTimeout(
//      () => window.scrollTo(...(savedPosition || [0, 0])),
//      transitionDelay
//   )
// }
// return false
//}
