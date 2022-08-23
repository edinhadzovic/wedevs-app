
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks";

interface IRequireAuthRouteProps {
    children: JSX.Element
}

export const RequreAuthRoute: React.FC<IRequireAuthRouteProps> = ({ children }) => {
    const {auth, loading} = useUser();
    const location = useLocation();

    if (loading) {
        return <></>
    }

    if (!auth) {
        return <Navigate to="/" state={{from: location}} replace={true} />
    }

    return children;
}