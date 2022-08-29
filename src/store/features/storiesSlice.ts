import { createSlice } from "@reduxjs/toolkit";
import { IStory } from "../../interface";
import { getStories } from "../thunks";

interface IStoriesSliceState {
    
    stories: IStory[];
    fetching: boolean;
}

const initialState: IStoriesSliceState = {
    stories: [],
    fetching: true,
}

export const storiesSlice = createSlice({
    name: "stories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getStories.pending, (state, action) => {

        })
        builder.addCase(getStories.fulfilled, (state, action) => {
            state.stories = action.payload;
            state.fetching = false;
        })
        builder.addCase(getStories.rejected, (state, action) => {

        })
    }
});

export const storiesReducer = storiesSlice.reducer;