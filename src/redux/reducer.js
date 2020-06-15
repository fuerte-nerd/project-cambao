import {
  SET_LANGUAGE_DIALOG,
  SET_REDIRECT,
  SET_LANGUAGE,
  SET_NAV,
  SET_MAIN_IMAGE,
  SET_POPUP,
  SET_NOTICE_DIALOG,
  SET_DONATE_DIALOG,
  SET_LANGUAGE_REDIRECT_DIALOG,
  SET_SITE_READY,
} from "./types"

const initialState = {
  siteReady: false,
  siteLang: null,
  navOpen: false,
  redirect: "/",
  mainImage: null,
  sharePopup: {
    visible: false,
    href: ``,
    title: ``,
  },
  noticeDialog: {
    visible: false,
    heading: ``,
    body: ``,
    btnText: ``,
  },
  donateDialog: false,
  languageDialogVisible: false,
  languageRedirectDialog: {
    visible: false,
    lang: ``,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SITE_READY:
      return {
        ...state,
        siteReady: action.payload,
      }
    case SET_LANGUAGE_REDIRECT_DIALOG:
      return {
        ...state,
        languageRedirectDialog: action.payload,
      }
    case SET_DONATE_DIALOG:
      return {
        ...state,
        donateDialog: action.payload,
      }
    case SET_NOTICE_DIALOG:
      return {
        ...state,
        noticeDialog: action.payload,
      }
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
