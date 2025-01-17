import { LOADING_DATA, SET_POSTS } from "../types";

const initialState = {
  posts: [],
  loading: false,
  page: 0,
  hasMore: true,
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
        posts: [...state.posts, ...action.payload],
        page: state.page + 1,
        loading: false,
      };

    default:
      return state;
  }
}
