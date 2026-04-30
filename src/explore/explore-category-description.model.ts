
export default class ExploreCategoryDescriptionModel {
    id: number;
    categoryId: number;
    title?: string;
    description?: string;

    constructor(data: any) {
        this.id = data.id;
        this.categoryId = data.categoryId;
        this.title = data.title;
        this.description = data.description;
    }
}
