import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducer";
import uiReducer from "./reducers/uiReducer";

const store = configureStore({
  reducer: {
    post: postReducer,
    auth: authReducer,
    ui: uiReducer,
  },
});

export default store;
