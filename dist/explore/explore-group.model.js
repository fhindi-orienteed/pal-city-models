import ExploreCategoryModel from "./explore-category.model";
export default class ExploreGroupModel {
    constructor(data) {
        this.id = data.id;
        this.title = data.title || '';
        this.totalItems = data.totalItems || 0;
        this.status = data.status || 'active';
        this.sequence = data.sequence || 0;
        if (data.categories) {
            this.categories = data.categories.map((category) => new ExploreCategoryModel(category));
        }
        else {
            this.categories = [];
        }
    }
}
