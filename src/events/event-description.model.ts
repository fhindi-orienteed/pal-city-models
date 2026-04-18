
export default class EventDescriptionModel {
    id: number;
    eventId: number;
    langId: number;
    title?: string;
    shortDescription?: string;
    longDescription?: string;

    constructor(data: any) {
        this.id = data.id;
        this.eventId = data.eventId;
        this.langId = data.langId;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
    }
}