import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInterest, IUser } from "../../interface";
import { client } from "../../services";

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

export const updateMe = createAsyncThunk('user/updateMe', async (user: IUser) => {
    const payload: IUser = {
        ...user,
        newUser: false
    }
    const res = await client.user.updateUser(payload);
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeBio: (state, action: PayloadAction<string>) => {
            state.user!.bio = action.payload;
        },
        addNewInterest: (state, action: PayloadAction<IInterest>) => {
            //dont push if already exists
            if (state.user!.interests.find(i => i.id === action.payload.id)) return;
            state.user!.interests.push(action.payload);
        },
        removeInterest: (state, action: PayloadAction<IInterest>) => {
            state.user!.interests = state.user!.interests.filter(i => i.id !== action.payload.id);
        }
    },
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

export const { changeBio, addNewInterest, removeInterest } = userSlice.actions;

export const userReducer = userSlice.reducer;