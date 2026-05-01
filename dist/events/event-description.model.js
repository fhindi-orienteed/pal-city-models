export class EventDescriptionModel {
    constructor(data) {
        this.id = data.id;
        this.eventId = data.eventId;
        this.langId = data.langId;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
    }
}
