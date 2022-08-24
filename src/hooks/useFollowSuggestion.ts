import { useEffect } from "react"
import { FollowSuggestionActionType, useFollowSuggestionReducer } from "../reducer";
import { client } from "../services";


export const useFollowSuggestion = () => {
    const [state, dispatch] = useFollowSuggestionReducer();
    const { users, fetching } = state;

    useEffect(() => {
        dispatch({ type: FollowSuggestionActionType.FETCHING, payload: {} });
        client.user.findUsersWithSameInterests().then(res => {
            dispatch({ type: FollowSuggestionActionType.FETCHED, payload: { users: res.data } });
        }).catch(err => console.log(err))
    }, [dispatch])

    return [users, fetching] as const;
}