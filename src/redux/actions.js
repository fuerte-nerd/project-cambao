import { SET_LANGUAGE, SET_NAV } from "./types"

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: lang,
})

export const setNav = navState => ({
  type: SET_NAV,
  payload: navState,
})
