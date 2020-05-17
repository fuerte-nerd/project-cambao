import { SET_REDIRECT, SET_LANGUAGE, SET_NAV } from "./types"

const initialState = {
  siteLang: "en",
  navOpen: false,
  redirect: "/",
}

export default (state = initialState, action) => {
  switch (action.type) {
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
