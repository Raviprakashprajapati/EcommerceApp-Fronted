import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-features/userSlice.js"
import adminReducer from "./redux-features/adminSlice.js"
import searchReducer from "./redux-features/searchSlice.js"

export const store = configureStore({
    reducer: {

        user: userReducer,
        admin: adminReducer,
        search:searchReducer
    }
})