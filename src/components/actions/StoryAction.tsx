import { faStar, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IStory } from "../../interface";
import { LikeCommentsCounterActionTypes, useLikeCommentsCounterReducer } from "../../reducer";
import { client } from "../../services";

interface ICreateStoryActionProps {
    story: IStory
}

export const StoryAction: React.FC<ICreateStoryActionProps> = ({story}) => {
    const [state, dispatch] = useLikeCommentsCounterReducer({comments: story._count.comments, likes: story._count.likes});

    const handleLike = () => {
        client.stories.likeStory(story.slug).then((res) => {
            dispatch({type: LikeCommentsCounterActionTypes.SET_LIKES_COUNT, payload: {likes: res.data.likes}});
        })
    }

    return (
        <div className="flex space-x-4">
            <button className="hover:bg-gray-100 rounded-sm transition-colors cursor-pointer py-1 px-2">
                <FontAwesomeIcon icon={faComment} /> <span className="font-bold" style={{textShadow: '0px 4px 4px #bdbdbd'}}>{state.comments}</span>
            </button>
            <button onClick={handleLike} className="hover:bg-gray-100 rounded-sm transition-colors cursor-pointer py-1 px-2">
                <FontAwesomeIcon icon={faStar} /> <span className="font-bold" style={{textShadow: '0px 4px 4px #bdbdbd'}}>{state.likes}</span>
            </button>
        </div>
    );
}