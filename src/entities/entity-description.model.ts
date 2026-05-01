export class EntityDescriptionModel {
    title?: string;
    entityId?: number;
    shortDescription?: string;
    longDescription?: string;
    langId?: number;

    constructor(data: any) {
        this.entityId = data.entityId;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.langId = data.langId;
    }
}