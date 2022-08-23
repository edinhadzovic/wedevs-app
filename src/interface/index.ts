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
}

export interface IInterest {
    id: string;
    name: string;
}