import { AuthService, UserService } from "./api";

class Client {
    public auth: AuthService;
    public user: UserService;
    constructor() {
        this.auth = new AuthService();
        this.user = new UserService();
    }
}

export const client = new Client();