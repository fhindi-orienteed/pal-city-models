export default class EntityDescriptionModel {
    constructor(data) {
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.langId = data.langId;
    }
}
