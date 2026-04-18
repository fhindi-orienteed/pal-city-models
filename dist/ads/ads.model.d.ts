import { AdsDescriptionModel } from "./ads-description.model.js";
export declare class AdsModel {
    id: number;
    type: string;
    status: string;
    sequence: number;
    description?: AdsDescriptionModel;
    constructor(data: any);
}
