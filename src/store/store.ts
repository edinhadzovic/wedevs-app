import { configureStore } from "@reduxjs/toolkit";
import { userReducer, errorReducer, storyReducer, storiesReducer } from "./features";
import { activeStoryReducer } from "./features/activeStorySlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer,
        story: storyReducer,
        stories: storiesReducer,
        activeStory: activeStoryReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store