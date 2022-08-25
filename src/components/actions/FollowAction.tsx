import { useUser } from "../../hooks";
import { useIsFollower } from "../../hooks/useIsFollower";
import { IUser } from "../../interface";
import { Button } from "../primitives";

interface IFollowActionProps {
    toFollow: IUser;
}

export const FollowAction: React.FC<IFollowActionProps> = ({toFollow}) => {
    const [isFollower, startFollowing, unFollow] = useIsFollower(toFollow);

    return (
        <div>
            {isFollower ? <Button onClick={() => unFollow()} version="warning">Unfollow</Button> : <Button onClick={() => startFollowing()}>follow</Button>}
        </div>
    );
}