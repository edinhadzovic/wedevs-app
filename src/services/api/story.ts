import { AxiosInstance } from "axios";
import { ICreateStory } from "../../interface";
import { backendService } from "../core";

export class StoriesService {
    private http: AxiosInstance;
    constructor() {
        this.http = backendService.backendAxios;
    }

    createStory(story: ICreateStory) {
        return this.http.post('stories', story);
    }

    getStories() {
        return this.http.get('stories');
    }

    getStory(slug: string) {
        return this.http.get(`stories/${slug}`);
    }

    likeStory(slug: string) {
        return this.http.post(`stories/${slug}/like`);
    }
    // register(email, password) {
    //     return this.http.post('/api/auth/register', { email, password });
    // }
    // logout() {
    //     return this.http.post('/api/auth/logout', {});
    // }
}