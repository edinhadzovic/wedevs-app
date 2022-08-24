import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { IUser } from "../../interface";
import { addNewInterest, removeInterest } from "../../store/features";
import { InterestField } from "../fields";

interface IInterestsPageProps {
    user: IUser;
    onNextClick: () => void;
}

export const InterestsPage: React.FC<IInterestsPageProps> = (props) => {
    const { user, onNextClick } = props;
    // should be maybe a hook thats stores input value, fetch interests from api and dispatch action to user reducer.
    const dispatch = useDispatch();

    return (
        <div className="w-full sm:w-1/2 mx-auto space-y-6">
            <div className="space-y-6 text-center">
                <div className="text-[24px] font-bold">
                    Find your dev community
                </div>
                <div>
                    start with your 5 favorite programming languages, frameworks, tools or anything what you use and love.
                </div>
            </div>
            <div className="text-center space-y-4">
                <div>
                    <InterestField onInterestSelected={(interest) => dispatch(addNewInterest(interest))}/>
                </div>
                <div className="flex flex-wrap">
                    {user.interests.map((interest, index) => (
                        // todo: create own component
                        <div key={interest.id} className="px-4 py-2 mx-2 my-2 bg-gray-800 text-white font-bold shadow-md rounded">{interest.name}<FontAwesomeIcon onClick={() => dispatch(removeInterest(interest))} className="mx-1 cursor-pointer" icon={faXmark} /></div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={onNextClick} className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >Next</button>
            </div>
        </div>
    );
}