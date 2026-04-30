import { ExploreCategoryDescriptionModel } from "./explore-category-description.model.js";
export declare class ExploreCategoryModel {
    id: number;
    handle: string;
    groupId?: number;
    totalItems: number;
    sequence: number;
    status: string;
    thumbnail?: string;
    description?: ExploreCategoryDescriptionModel;
    constructor(data: any);
}
