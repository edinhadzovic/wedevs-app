import axios, { AxiosInstance } from "axios";
import { config } from "../config";

export class BackendService {
    public backendAxios: AxiosInstance;
    
    constructor() {
        this.backendAxios = axios.create({baseURL: config.BACKEND_SERVICE_URL, withCredentials: true});
    }
}

export const backendService = new BackendService();