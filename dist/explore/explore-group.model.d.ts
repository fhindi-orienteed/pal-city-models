import { ExploreCategoryModel } from "./explore-category.model.js";
import { ExploreGroupDescriptionModel } from "./explore-group-description.model.js";
export declare class ExploreGroupModel {
    id: number;
    handle: string;
    totalItems: number;
    sequence: number;
    status: string;
    thumbnail?: string;
    mobileHomeFeed: boolean;
    categories: ExploreCategoryModel[];
    description?: ExploreGroupDescriptionModel;
    constructor(data: any);
}
