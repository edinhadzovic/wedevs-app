import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../interface";
import { client } from "../../../services";

interface IUserSliceState {
    user: IUser | null
    auth: boolean
    loading: boolean
}

const initialState: IUserSliceState = {
    user: null,
    auth: false,
    loading: true
}

export const fetchMe = createAsyncThunk('user/me', async () => {
    const res = await client.user.me();
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.auth = true;
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchMe.rejected, (state, action) => {
            state.auth = false;
            state.user = null;
            state.loading = false;
        })
    },
});

export const selectMe = (state: any) => state.user;

export const userReducer = userSlice.reducer;