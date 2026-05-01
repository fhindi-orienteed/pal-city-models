import { ExploreCategoryModel } from "./explore-category.model.js";
import { ExploreGroupDescriptionModel } from "./explore-group-description.model.js";
export class ExploreGroupModel {
    constructor(data) {
        this.categories = [];
        this.id = data.id;
        this.handle = data.handle;
        this.thumbnail = data.thumbnail;
        this.totalItems = data.totalItems || 0;
        this.status = data.status || 'draft';
        this.mobileHomeFeed = data.mobileHomeFeed || false;
        this.sequence = data.sequence || 0;
        if (data.description) {
            this.description = new ExploreGroupDescriptionModel(data.description);
        }
        if (data.categories) {
            this.categories = data.categories.map((category) => new ExploreCategoryModel(category));
        }
    }
}
