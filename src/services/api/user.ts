import { AxiosInstance } from "axios";
import { IUser } from "../../interface";
import { backendService } from "../core";

export class UserService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }

    me() {
        return this.http.get('user/me');
    }

    updateUser(user: IUser) {
        return this.http.patch('user/me', user);
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}