import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStory } from "../../interface";
import { FetchingActiveStoryStatus } from "../../utils/usefulTypes";
import { getStory } from "../thunks";

interface IActiveStorySliceState {
    story: IStory | undefined;
    fetching: FetchingActiveStoryStatus;
    comment: string;
    slug: string;
}

const initialState: IActiveStorySliceState = {
    story: undefined,
    fetching: "pending",
    comment: "",
    slug: "",
}

export const activeStorySlice = createSlice({
    name: "activeStory",
    initialState,
    reducers: {
        setStory: (state, action: PayloadAction<IStory | undefined>) => {
            state.story = action.payload;
            state.fetching = action.payload ? "partial" : "pending";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getStory.pending, (state, action) => {
            state.fetching = "pending";
        })
        builder.addCase(getStory.fulfilled, (state, action) => {
            state.story = action.payload;
            state.fetching = "fulfilled";
        })
        builder.addCase(getStory.rejected, (state, action) => {})
    }
});

export const {setStory} = activeStorySlice.actions;

export const activeStoryReducer = activeStorySlice.reducer;