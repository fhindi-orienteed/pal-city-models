import { MediaModel } from "../common/media.model.js";
import { NewsDescriptionModel } from "./news-description.model.js";
export declare class NewsModel {
    id: number;
    handle?: string;
    type: string;
    status: string;
    sequence: number;
    category: string;
    author: string;
    source?: string;
    tags: string[];
    publishedAt?: string;
    description?: NewsDescriptionModel;
    media: MediaModel[];
    constructor(data: any);
    get thumbnail(): string | undefined;
}
