import { SET_REDIRECT, SET_LANGUAGE, SET_NAV, SET_MAIN_IMAGE } from "./types"

export const setMainImage = img => ({
  type: SET_MAIN_IMAGE,
  payload: img,
})

export const setRedirect = path => ({
  type: SET_REDIRECT,
  payload: path,
})
export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: lang,
})

export const setNav = navState => ({
  type: SET_NAV,
  payload: navState,
})
