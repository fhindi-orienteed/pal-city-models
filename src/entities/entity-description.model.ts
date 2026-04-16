export default class EntityDescriptionModel {
    title?: string;
    shortDescription?: string;
    longDescription?: string;
    langId?: number;

    constructor(data: any) {
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.langId = data.langId;
    }
}