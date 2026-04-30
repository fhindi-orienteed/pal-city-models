import { ExploreCategoryDescriptionModel } from "./explore-category-description.model.js";

export class ExploreCategoryModel {
    id: number;
    handle: string;
    groupId?: number;

    totalItems: number;
    sequence: number;
    status: string;

    thumbnail?: string;
    description?: ExploreCategoryDescriptionModel;

    constructor(data: any) {
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
