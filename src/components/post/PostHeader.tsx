import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { IStory } from "../../interface";
import { Avatar } from "../primitives";

interface IPostHeaderProps {
    story: IStory
}

export const PostHeader: React.FC<IPostHeaderProps> = (props) => {
    const { story } = props;
    
    return (
        <div className="flex space-x-4 items-center px-2 py-4 border-b-[1px] border-gray-200 relative">
            <div>
                <Avatar source={story!.author.avatar} size="small" />
            </div>
            <div className="space-y-2">
                <div>
                    <Link className="text-gray-900 hover:text-gray-700" to={`/users/${story!.author.username}`}>@{story!.author.username}</Link>
                </div>
                <div className="text-xs">
                    <div>{DateTime.fromISO(story!.createdAt).toLocaleString(DateTime.DATE_MED)}</div>
                </div>
            </div>
        </div>
    );
}