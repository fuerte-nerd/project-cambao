import {
  SET_LANGUAGE_DIALOG,
  SET_POPUP,
  SET_REDIRECT,
  SET_LANGUAGE,
  SET_NAV,
  SET_MAIN_IMAGE,
  SET_NOTICE_DIALOG,
  SET_DONATE_DIALOG,
  SET_LANGUAGE_REDIRECT_DIALOG,
} from "./types"

export const setLanguageRedirectDialog = obj => ({
  type: SET_LANGUAGE_REDIRECT_DIALOG,
  payload: obj,
})

export const setDonateDialog = isOpen => ({
  type: SET_DONATE_DIALOG,
  payload: isOpen,
})

export const setNoticeDialog = obj => ({
  type: SET_NOTICE_DIALOG,
  payload: obj,
})

export const setLanguageDialog = isOpen => ({
  type: SET_LANGUAGE_DIALOG,
  payload: isOpen,
})

export const setPopup = obj => ({
  type: SET_POPUP,
  payload: obj,
})

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
