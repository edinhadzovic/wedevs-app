import { useReducer } from "react";
import { IUser } from "../interface";
import { FetchingStatus } from "../utils/usefulTypes";

export enum FollowSuggestionActionType {
    FETCHING,
    FETCHED,
    ERROR,
}

interface IFollowSuggestionState {
    users: IUser[];
    fetching: FetchingStatus
}

interface IAction {
    type: FollowSuggestionActionType;
    payload: Partial<IFollowSuggestionState>
}

const reducer = (state: IFollowSuggestionState, action: IAction): IFollowSuggestionState => {
    switch (action.type) {
        case FollowSuggestionActionType.FETCHING:
            return { ...state, fetching: "pending" };
        case FollowSuggestionActionType.FETCHED:
            return { fetching: "success", users: action.payload.users! };
        case FollowSuggestionActionType.ERROR:
            return { ...state, fetching: "error" };
        default:
            throw new Error("Unhandled action type");
    }
}

const initialState: IFollowSuggestionState = {
    users: [],
    fetching: "idle"
}

export const useFollowSuggestionReducer = () => useReducer(reducer, initialState);