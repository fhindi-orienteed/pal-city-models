import { NewsDescriptionModel } from "./news-description.model.js";
export declare class NewsModel {
    id: number;
    type: string;
    status: string;
    sequence: number;
    description?: NewsDescriptionModel;
    constructor(data: any);
}
