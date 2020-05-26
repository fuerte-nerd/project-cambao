import {
  SET_LANGUAGE_DIALOG,
  SET_REDIRECT,
  SET_LANGUAGE,
  SET_NAV,
  SET_MAIN_IMAGE,
  SET_POPUP,
} from "./types"

const initialState = {
  siteLang: "en",
  navOpen: false,
  redirect: "/",
  mainImage: null,
  sharePopup: {
    visible: false,
    href: ``,
    title: ``,
  },
  languageDialogVisible: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE_DIALOG:
      return {
        ...state,
        languageDialogVisible: action.payload,
      }
    case SET_POPUP:
      return {
        ...state,
        sharePopup: action.payload,
      }
    case SET_MAIN_IMAGE:
      return {
        ...state,
        mainImage: action.payload,
      }
    case SET_REDIRECT:
      return {
        ...state,
        redirect: action.payload,
      }
    case SET_LANGUAGE:
      return {
        ...state,
        siteLang: action.payload,
      }
    case SET_NAV:
      return {
        ...state,
        navOpen: action.payload,
      }
    default:
      return state
  }
}
