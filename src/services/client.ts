import { AuthService, InterestService, StoriesService, UserService } from "./api";

class Client {
    public auth: AuthService;
    public user: UserService;
    public interests: InterestService;
    public stories: StoriesService;

    constructor() {
        this.auth = new AuthService();
        this.user = new UserService();
        this.interests = new InterestService();
        this.stories = new StoriesService();
    }
}

export const client = new Client();