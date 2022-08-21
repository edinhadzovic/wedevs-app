import { AxiosInstance } from "axios";
import { backendService } from "../core";

export class UserService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }
    me() {
        return this.http.get('user/me');
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}