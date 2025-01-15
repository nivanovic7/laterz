import { TOGGLE_MENU } from "../types";

const initialState = {
  menuOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    default:
      return state;
  }
}
