import { ERROR, LOADING_DATA, SET_HAS_MORE, SET_POSTS } from "../types";

const POSTS_LIMIT = 2;

export const fetchData = (page) => {
  return async (dispatch, getState) => {
    const offset = page * POSTS_LIMIT;
    dispatch({ type: LOADING_DATA });
    console.log(getState().post);

    try {
      const user = getState((state) => state.auth.user);
      const response = await fetch(
        `https://laterz.api.exebyte.io/api/outfits?offset=${offset}&limit=${POSTS_LIMIT}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE3N2IyZTg3ZDE1ZmY3OTcxM2NiZDkiLCJ1c2VyRW1haWwiOiJ0ZXN0QHlhaG9vLmNvbSIsInVzZXJOYW1lIjoidGVzdFVzZXIiLCJ1c2VyRmlyc3ROYW1lIjoiIiwidXNlckxhc3ROYW1lIjoiIiwidXNlckFjY291bnRTdGF0dXMiOiJhY3RpdmUiLCJ1c2VyQWNjb3VudFR5cGUiOiJjbGllbnQiLCJ1c2VyUmVsYXRpb25zaGlwU3RhdHVzIjoic2luZ2xlIiwiaWF0IjoxNzM3MzAyMjkwLCJleHAiOjE3NDAzMTEzMTN9.qSzcOFK5meAQOrmuYYgLOEJOQ5VQu0kf7_k3-rKhd3M",
          },
        }
      );
      const data = await response.json();
      if (!data.data[0]) dispatch({ type: SET_HAS_MORE, payload: false });
      dispatch({ type: SET_POSTS, payload: data.data });
    } catch (error) {
      dispatch({ type: ERROR, error: error.message });
    }
  };
};
