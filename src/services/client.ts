import { AuthService, InterestService, UserService } from "./api";

class Client {
    public auth: AuthService;
    public user: UserService;
    public interests: InterestService;

    constructor() {
        this.auth = new AuthService();
        this.user = new UserService();
        this.interests = new InterestService();
    }
}

export const client = new Client();