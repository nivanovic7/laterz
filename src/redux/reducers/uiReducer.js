import { SET_HEADING, TOGGLE_MENU } from "../types";

const initialState = {
  menuOpen: false,
  heading: "Socialize",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case SET_HEADING:
      return {
        ...state,
        heading: action.payload,
      };

    default:
      return state;
  }
}
