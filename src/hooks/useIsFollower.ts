import React, { useState } from "react";
import { IUser } from "../interface";
import { client } from "../services";
import { useUser } from "./useUser";

export const useIsFollower = (user: IUser) => {
    const {user: follower} = useUser();
    const [isFollower, setIsFollower] = useState(user.follower?.some(f => f.followerId === follower?.id));

    const unFollow = async () => {
        try {
            const res = await client.user.unFollow(user.id);
            if (res.status === 200) {
                setIsFollower(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const startFollowing = async () => {
        try {
            const res = await client.user.startFollowing(user.id);
            if (res.status === 200) {
                setIsFollower(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return [isFollower, startFollowing, unFollow] as const;
}