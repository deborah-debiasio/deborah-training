
import { Exercise2BaseUrl } from "../utils/costants";
import { ApiBaseService } from "./ApiBaseService";

export class Exercise2Service implements ApiBaseService {

    // Get random beer info
    static async getBeerInfo(size: number) {
        return await ApiBaseService.request('GET', `${Exercise2BaseUrl}/beer/random_beer?size=${size}`);
    }

}