import { faStar, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStoryActionProps {}

export const StoryAction: React.FC<IStoryActionProps> = () => {

    return (
        <div className="flex space-x-4">
            <div>
                <FontAwesomeIcon icon={faComment} /> <span className="font-bold" style={{textShadow: '0px 4px 4px #bdbdbd'}}>32</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faStar} /> <span className="font-bold" style={{textShadow: '0px 4px 4px #bdbdbd'}}>32</span>
            </div>
        </div>
    );
}