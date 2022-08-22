import { useParams } from "react-router-dom";

interface IUserProfileProps {}

export const UserProfile: React.FC<IUserProfileProps> = () => {
    const {username} = useParams();

    return (
        <div>
            should fetch relative data from the user and his post, about @{username}
        </div>
    );
}