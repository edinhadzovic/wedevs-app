import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateStory, StoryState } from "../../interface";
import { client } from "../../services";

export const publishStory = createAsyncThunk('story/publish', async (story: ICreateStory) => {
    const payload: ICreateStory = {
        ...story,
        published: true,
        state: StoryState.PUBLISHED,
    }
    const res = await client.stories.createStory(payload);
    return res.data;
});

export const draftStory = createAsyncThunk('story/draft', async (story: ICreateStory) => {
    const res = await client.stories.createStory(story);
    return res.data;
});

export const getStories = createAsyncThunk('story/getStories', async () => {
    const res = await client.stories.getStories();
    return res.data;
});

export const getStory = createAsyncThunk('story/getStory', async (slug: string) => {
    const res = await client.stories.getStory(slug);
    return res.data;
});