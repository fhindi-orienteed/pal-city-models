import ExploreCategoryModel from "./explore-category.model.js";
export default class ExploreGroupModel {
    id: number;
    totalItems: number;
    sequence: number;
    status: string;
    title: string;
    categories: ExploreCategoryModel[];
    constructor(data: any);
}
