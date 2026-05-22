import { CityDescriptionModel } from "./city-description.model.js";
export declare class CityModel {
    handle: string;
    status: string;
    sequence: number;
    thumbnail?: string;
    description?: CityDescriptionModel;
    constructor(data: any);
}
