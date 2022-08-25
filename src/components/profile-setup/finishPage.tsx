import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";
import { updateMe } from "../../store/features";
import store from "../../store/store";

interface IFinishPageProps {}

export const FinishPage: React.FC<IFinishPageProps> = () => {
    const {user} = useUser();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await store.dispatch(updateMe(user));
        navigate("/home", {replace: true});
    }

    return (
        <div className="w-full sm:w-1/2 mx-auto space-y-6">
            <div className="space-y-6 text-center">
                <div className="text-[24px] font-bold">
                    Thank you for joining, please read the rules and contribute standards. 
                </div>
            </div>
            <div className="flex justify-end">
                <button className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" onClick={handleSubmit}>done</button>
            </div>
        </div>
    );
}