import { SET_NAV } from "./types"

const initialState = {
  navOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        navOpen: action.payload,
      }
    default:
      return state
  }
}
