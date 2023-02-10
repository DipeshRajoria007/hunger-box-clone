import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer :{
        cart : cartSlice.reducer,
    },
})

export default store;