
export default class EventDescriptionModel {
    eventId: number;
    langId: number;
    title?: string;
    summary?: string;
    description?: string;
    coverImage?: string;
    images?: string[];
    attachments?: string[];

    constructor(data: any) {
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