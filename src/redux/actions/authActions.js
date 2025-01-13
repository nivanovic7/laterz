import { ERROR, LOADING_DATA, SET_USER } from "../types";

export const login = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_DATA });

    try {
      const response = await fetch(
        "https://laterz.api.exebyte.io/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: "test@yahoo.com",
            userPassword: "Password1!",
          }),
        }
      );
      const data = await response.json();
      dispatch({ type: SET_USER, payload: data.data });
    } catch (error) {
      dispatch({ type: ERROR, error: error.message });
    }
  };
};
