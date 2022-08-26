export type StoryState = "draft" | "published" | "archived";

export interface IUser {
    avatar: string;
    bio: string | undefined;
    displayName: string | undefined;
    email: string;
    id: string;
    newUser: boolean;
    profileUrl: string;
    username: string;
    interests: IInterest[];
    follower?: IFollower[];
    following?: IFollower[];
}

export interface IInterest {
    id: string;
    name: string;
}

export interface IFollower {
    followerId?: string;
    followingId?: string;
    follower?: IUser;
    following?: IUser;
}

export interface IStory {
    state: StoryState;
    title: string;
    contentRaw: string;
    contentHtml: string;
}