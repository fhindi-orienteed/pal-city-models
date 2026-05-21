export class EntityDescriptionModel {
    constructor(data) {
        this.entityId = data.entityId;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.langId = data.langId;
    }
}
