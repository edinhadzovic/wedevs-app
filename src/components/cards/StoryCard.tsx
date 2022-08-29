import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Avatar } from "../primitives";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { StoryAction } from "../actions";
import { IStory } from "../../interface";
import { createSlugFromTitle } from "../../utils/indes";

interface ICreateStoryCardProps {
    story: IStory
}

export const StoryCard: React.FC<ICreateStoryCardProps> = (props) => {
    const {story} = props;

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
            <Link to={`/edinhadzovic/posts/${createSlugFromTitle(story.title, story.slug)}`}>
                <div className="space-y-4 p-4 cursor-pointer transition-all rounded">
                    <div>
                        <h3 className="font-bold text-4xl">
                            {story.title}
                        </h3>
                    </div>
                    <div className=" overflow-hidden max-h-28" dangerouslySetInnerHTML={{__html: story.contentHTML}}></div>
                </div>
            </Link>
            
            <div className=" justify-end flex">
                <StoryAction story={story} />
            </div>
        </div>
    );
}