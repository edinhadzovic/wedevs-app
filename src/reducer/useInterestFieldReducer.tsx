import { useReducer } from "react";
import { IInterest } from "../interface";
import { FetchingStatus } from "../utils/usefulTypes";

export enum InterestFieldAction {
    FETCHING,
    RESULT,
    CHANGE,
    ERROR
}

interface IInterestFieldReducerState {
    fetching: FetchingStatus;
    result: IInterest[];
    input: string
}

interface IInterestFieldReducerAction {
    payload: Partial<IInterestFieldReducerState>
    type: InterestFieldAction;
}

const reducer = (state: IInterestFieldReducerState, action: IInterestFieldReducerAction): IInterestFieldReducerState => {
    switch(action.type) {
        case InterestFieldAction.FETCHING:
            return {
                ...state,
                fetching: "pending",
                result: []
            }
        case InterestFieldAction.RESULT: {
            return {
                ...state,
                fetching: "success",
                result: action.payload.result!
            }
        }
        case InterestFieldAction.CHANGE: {
            return {
                ...state,
                fetching: "idle",
                input: action.payload.input!
            }
        }
        case InterestFieldAction.ERROR: {
            return {
                ...state,
                fetching: "error",
                result: [],
            }
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

const initialState: IInterestFieldReducerState = {
    fetching: "idle",
    result: [],
    input: ""
}

export const useInterestFieldReducer = () => useReducer(reducer, initialState)
