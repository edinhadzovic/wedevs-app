import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICreateStory, StoryState } from "../../interface";
import parseMarkdown from "../../utils/parseMarkdown";
import { draftStory, publishStory } from "../thunks";

interface ICreateStorySliceState {
    story: ICreateStory
    submitting: boolean
}

const initialState: ICreateStorySliceState = {
    story: {
        state: StoryState.DRAFT,
        title: "",
        contentRaw: "",
        contentHTML: "",
        published: false
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
            state.story.contentHTML = parseMarkdown(action.payload);
        },
        archiveStory: (state, action: PayloadAction<StoryState.ARCHIVED>) => {
            state.story.state = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(publishStory.pending, (state, action) => {
            state.submitting = true;
        })
        builder.addCase(publishStory.fulfilled, (state, action) => {
            state.submitting = false;
            state.story = action.payload;
        })
        builder.addCase(publishStory.rejected, (state, action) => {})
        builder.addCase(draftStory.pending, (state, action) => {
            state.submitting = true;
        })
        builder.addCase(draftStory.fulfilled, (state, action) => {
            state.submitting = false;
            state.story = action.payload;
        })
        builder.addCase(draftStory.rejected, (state, action) => {})
    },
});

export const { changeTitle, changeContentRaw, archiveStory } = storySlice.actions;

export const storyReducer = storySlice.reducer;