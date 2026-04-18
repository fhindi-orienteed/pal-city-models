import ExploreCategoryModel from "./explore-category.model";

export default class ExploreGroupModel {
    id: number;
    totalItems: number;
    sequence: number;
    status: string;
    title: string;
    categories: ExploreCategoryModel[];

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title || '';
        this.totalItems = data.totalItems || 0;
        this.status = data.status || 'active';
        this.sequence = data.sequence || 0;
        if (data.categories) {
            this.categories = data.categories.map((category: any) => new ExploreCategoryModel(category));
        } else {
            this.categories = [];
        }
    }
}
