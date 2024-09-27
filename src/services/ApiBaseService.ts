import axios, { Method } from "axios";

export abstract class ApiBaseService {

    static async request(method: Method, requestUrl: string, body?: any) {
        const timeout = 3000;
        const instance = axios.create();

        return instance.request({
            baseURL: requestUrl,
            method: method,
            timeout: timeout,
            data: body,
        }) 
    }
}