import { LOADING_DATA, SET_POSTS } from "../types";

const initialState = {
  posts: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
