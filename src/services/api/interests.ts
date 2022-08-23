import { AxiosInstance } from "axios";
import { backendService } from "../core";

export class InterestService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }

    search(search: string) {
        return this.http.get('interests?search=' + search);
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}