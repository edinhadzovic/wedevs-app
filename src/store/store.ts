import { configureStore } from "@reduxjs/toolkit";
import { userReducer, errorReducer, storyReducer } from "./features";

const store = configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer,
        story: storyReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store