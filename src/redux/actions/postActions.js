import { ERROR, LOADING_DATA, SET_POSTS } from "../types";

export const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_DATA });

    try {
      const user = getState((state) => state.auth.user);
      const response = await fetch(
        "https://laterz.api.exebyte.io/api/outfits",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE3N2IyZTg3ZDE1ZmY3OTcxM2NiZDkiLCJ1c2VyRW1haWwiOiJ0ZXN0QHlhaG9vLmNvbSIsInVzZXJOYW1lIjoidGVzdFVzZXIiLCJ1c2VyRmlyc3ROYW1lIjoiIiwidXNlckxhc3ROYW1lIjoiIiwidXNlckFjY291bnRTdGF0dXMiOiJhY3RpdmUiLCJ1c2VyQWNjb3VudFR5cGUiOiJjbGllbnQiLCJ1c2VyUmVsYXRpb25zaGlwU3RhdHVzIjoic2luZ2xlIiwiaWF0IjoxNzM2NzYxOTc2LCJleHAiOjE3Mzk3NzA5OTl9.XYDTqIvEzkaw6OdA7FjiGlelJkX_adicaBGY_4QW3os",
          },
        }
      );
      const data = await response.json();
      dispatch({ type: SET_POSTS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, error: error.message });
    }
  };
};
