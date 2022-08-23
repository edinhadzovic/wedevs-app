import { useSelector } from "react-redux"
import { selectMe } from "../store/features"

export const useUser = () => {
    const {user, loading, auth} = useSelector(selectMe)

    return {user, loading, auth} as const;
}