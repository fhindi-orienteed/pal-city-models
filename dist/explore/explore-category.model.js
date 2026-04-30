import ExploreCategoryDescriptionModel from "./explore-category-description.model.js";
export default class ExploreCategoryModel {
    constructor(data) {
        this.id = data.id;
        this.handle = data.handle;
        this.groupId = data.groupId;
        this.totalItems = data.totalItems || 0;
        this.status = data.status || 'draft';
        this.sequence = data.sequence || 0;
        this.thumbnail = data.thumbnail;
        if (data.description) {
            this.description = new ExploreCategoryDescriptionModel(data.description);
        }
    }
}
