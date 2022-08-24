import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features";
import { errorReducer } from "./features/errorSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer
    }
});


export default store