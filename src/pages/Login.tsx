
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks";
import { client } from "../services";


export const Login = () => {
    const {user, auth, loading} = useUser();
    const singin = () => client.auth.login();
    const location = useLocation();

    if (loading) {
        return <></>
    }

    if (user && auth) {
        return <Navigate to="/home" state={{from: location}} replace={true} />
    }

    return (
        <div className="sm:h-screen sm:w-screen flex sm:justify-center sm:items-center mt-10 sm:mt-0 mx-2">
            <div className="flex flex-col sm:flex-row">
                <div className=" text-4xl w-full sm:w-1/2 mb-4 sm:mb-0">
                    The linkedin for developers. <span className="font-bold">Just better!</span>
                </div>
                <div className="sm:ml-4 text-center space-y-4 flex items-center flex-col justify-center">
                    <div>join now</div>
                    <button onClick={singin} className="bg-sea-green hover:bg-sea-green-dark shadow-md w-52 py-2 rounded-xl">
                        singin with github
                    </button>
                </div>
            </div>
        </div>
    )
}