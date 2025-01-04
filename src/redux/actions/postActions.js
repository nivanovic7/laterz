import { LOADING_DATA, SET_POSTS } from "../types";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
      const response = await fetch(
        "https://laterz.api.exebyte.io/api/outfits",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE3N2IyZTg3ZDE1ZmY3OTcxM2NiZDkiLCJ1c2VyRW1haWwiOiJ0ZXN0QHlhaG9vLmNvbSIsInVzZXJOYW1lIjoidGVzdFVzZXIiLCJ1c2VyRmlyc3ROYW1lIjoiIiwidXNlckxhc3ROYW1lIjoiIiwidXNlckFjY291bnRTdGF0dXMiOiJhY3RpdmUiLCJ1c2VyQWNjb3VudFR5cGUiOiJjbGllbnQiLCJ1c2VyUmVsYXRpb25zaGlwU3RhdHVzIjoic2luZ2xlIiwiaWF0IjoxNzMyNzExNjk2LCJleHAiOjE3MzU3MjA3MTl9.O_xNsOIt0kQkYbHcGaUhv3sPBONgpgWuxwk_RE6aIXg",
          },
        }
      );
      const data = await response.json();
      dispatch({ type: SET_POSTS, payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", error: error.message });
    }
  };
};
