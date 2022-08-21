import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { client } from "../services";
import { selectMe } from "../store/features";


export const Login = () => {
    const {user, auth, loading} = useSelector(selectMe);
    const singin = () => client.auth.login();
    const location = useLocation();

    if (loading) {
        return <></>
    }

    if (user && auth) {
        return <Navigate to="/home" state={{from: location}} replace={true} />
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex">
                <div className="text-[64px] w-1/2">
                    The linkedin for developers. <span className="font-bold">Just better!</span>
                </div>
                <div className="ml-4 text-center space-y-4 flex items-center flex-col justify-center">
                    <div>join now</div>
                    <button onClick={singin} className="bg-sea-green hover:bg-sea-green-dark shadow-md w-52 py-2 rounded-xl">
                        singin with github
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col">
            <button onClick={singin}>singin with github</button>
            Login Page
        </div>
    );
}