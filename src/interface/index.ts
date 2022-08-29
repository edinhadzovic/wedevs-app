export enum StoryState {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}

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

export interface ICreateStory {
    state: StoryState;
    title: string;
    contentRaw: string;
    contentHTML: string;
    published: boolean;
}

export interface IStory extends ICreateStory {
    id: string;
    author: IUser;
    createdAt: string;
    slug: string;
    _count: {
        comments: number;
        likes: number;
    }
}