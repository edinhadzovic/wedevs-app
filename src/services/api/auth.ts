import { AxiosInstance } from "axios";
import { backendService } from "../core";

export class AuthService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }
    login() {
        window.open(`${backendService.backendAxios.defaults.baseURL}auth/github`, "_self");
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}