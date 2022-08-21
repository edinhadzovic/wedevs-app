import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectMe } from "../store/features";

interface IRequireAuthRouteProps {
    children: JSX.Element
}

export const RequreAuthRoute: React.FC<IRequireAuthRouteProps> = ({ children }) => {
    const {auth, loading} = useSelector(selectMe);
    const location = useLocation();

    if (loading) {
        return <></>
    }

    if (!auth) {
        return <Navigate to="/" state={{from: location}} replace={true} />
    }

    return children;
}