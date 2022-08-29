import { useReducer } from "react";

export enum LikeCommentsCounterActionTypes {
    SET_COMMENTS_COUNT = "SET_COMMENTS_COUNT",
    SET_LIKES_COUNT = "SET_LIKES_COUNT"
}

interface LikeCommentsCounterState {
    comments: number;
    likes: number;
}

interface LikeCommentsCounterAction {
    type: LikeCommentsCounterActionTypes;
    payload: Partial<LikeCommentsCounterState>;
}

const reducer = (state: LikeCommentsCounterState, action: LikeCommentsCounterAction): LikeCommentsCounterState => {
    switch (action.type) {
        case LikeCommentsCounterActionTypes.SET_COMMENTS_COUNT:
            return { ...state, comments: action.payload.comments! };
        case LikeCommentsCounterActionTypes.SET_LIKES_COUNT:
            return { ...state, likes: action.payload.likes! };
        default:
            throw new Error("Unhandled action type");
    }
}

export const useLikeCommentsCounterReducer = (init: LikeCommentsCounterState) => useReducer(reducer, init);