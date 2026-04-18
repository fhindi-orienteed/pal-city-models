export default class EventDescriptionModel {
    constructor(data) {
        this.eventId = data.eventId;
        this.langId = data.langId;
        this.title = data.title;
        this.summary = data.summary;
        this.description = data.description;
        this.coverImage = data.coverImage;
        this.images = data.images;
        this.attachments = data.attachments;
    }
}
