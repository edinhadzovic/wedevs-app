import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Avatar } from "../primitives";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { StoryAction } from "../actions";

interface IStoryCardProps {}

export const StoryCard: React.FC<IStoryCardProps> = () => {

    return (
        <div className="space-y-5">
            <div className="flex flex-row">
                <div className="flex items-center space-x-2">
                    <Avatar size="small" source="https://avatars.githubusercontent.com/u/22931117?v=4" />
                    <Link to={`/users/edinhadzovic`} className="text-gray-900 hover:text-gray-700">
                        @edinhadzovic
                    </Link>
                </div>
                <div className="flex justify-end items-center cursor-pointer ml-auto mr-2">
                    <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
                </div>
            </div>
            <div className="space-y-2 p-2 cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                    <h3 className="font-bold text-xl">How working for wrong companies can hurt your, more then you think !</h3>
                </div>
                <div>
                    As a software developer, sometimes, you pick a job or contract because you need to get paid, but after working in this field for couple of years, maybe, the solutions to just say no...
                </div>
            </div>
            <div className=" justify-end flex">
                <StoryAction />
            </div>
        </div>
    );
}