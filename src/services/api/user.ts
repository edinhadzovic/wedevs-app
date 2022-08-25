import { AxiosInstance } from "axios";
import { IUser } from "../../interface";
import { backendService } from "../core";

export class UserService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }

    me() {
        return this.http.get('users/me');
    }

    updateUser(user: IUser) {
        return this.http.patch('users/me', user);
    }

    findUsersWithSameInterests() {
        return this.http.get('users?suggest=true');
    }

    startFollowing(userId: string) {
        return this.http.put(`users/${userId}/follow`);
    }

    unFollow(userId: string) {
        return this.http.put(`users/${userId}/unfollow`);
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}