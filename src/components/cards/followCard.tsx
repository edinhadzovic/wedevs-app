import { IUser } from "../../interface";
import { FollowAction } from "../actions";
import { Button, Avatar } from "../primitives"

interface IFollowCard {
    user: IUser;
}

export const FollowCard: React.FC<IFollowCard> = ({user}) => {

    return (
        <div className="border-2 border-black bg-cultured-light shadow-md p-5 space-y-4 w-full rounded-xl mx-auto">
            <div>
                <div className="flex flex-row items-center space-x-2">
                    <Avatar size="small" source={user.avatar} /> <span className="font-bold"> @{user.username} </span>
                </div>
            </div>
            <div>
                <p>
                    {user.bio}
                </p>
            </div>
            <div className="flex justify-end">
                <FollowAction toFollow={user} />
            </div>
        </div>
    )
}