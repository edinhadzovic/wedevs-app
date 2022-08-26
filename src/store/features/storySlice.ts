import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStory } from "../../interface";
import parseMarkdown from "../../utils/parseMarkdown";

interface IStorySliceState {
    story: IStory
    submitting: boolean
}

const initialState: IStorySliceState = {
    story: {
        state: "draft",
        title: "",
        contentRaw: "",
        contentHtml: ""
    },
    submitting: false
}

export const storySlice = createSlice({
    name: "story",
    initialState,
    reducers: {
        changeTitle: (state, action: PayloadAction<string>) => {
            state.story.title = action.payload;
        },
        changeContentRaw: (state, action: PayloadAction<string>) => {
            state.story.contentRaw = action.payload;
            state.story.contentHtml = parseMarkdown(action.payload);
        },
        archiveStory: (state, action: PayloadAction<"archived">) => {
            state.story.state = action.payload;
        }
    },
    extraReducers(builder) {},
});

export const { changeTitle, changeContentRaw, archiveStory } = storySlice.actions;

export const storyReducer = storySlice.reducer;