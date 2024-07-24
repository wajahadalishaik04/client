/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { createReducer } from "@reduxjs/toolkit";

export const loadingReducers = createReducer({ loading: false }, (builder) => {
  builder
    .addCase("startLoading", (state) => {
      state.loading = true;
    })
    .addCase("stopLoading", (state) => {
      state.loading = false;
    });
});

export const userReducers = createReducer(
  {
    user: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },
  (builder) => {
    builder.addCase("userSuccessLogin", (state, action) => {
      localStorage.setItem("token", action.payload);
      state.user = action.payload;
    });
  }
);
export const productReducers = createReducer({ products: [] }, (builder) => {
  builder.addCase("setProductData", (state, action) => {
    console.log(action.payload)
    state.products = action.payload;
  });
});

export const orderReducers = createReducer({orders:[]},(builder)=>{
  builder.addCase("setOrderData",(state,action)=>{
    state.orders = action.payload;
  })
})
