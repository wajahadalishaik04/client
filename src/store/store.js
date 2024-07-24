import { configureStore } from "@reduxjs/toolkit";
import { loadingReducers, userReducers,productReducers,orderReducers } from "./reducers";

const store = configureStore({
  reducer: {
    loadingReducers,
    userReducers,
    productReducers,
    orderReducers,
  },
});

export default store;
