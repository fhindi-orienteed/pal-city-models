export default class EventDescriptionModel {
    eventId: number;
    langId: number;
    title?: string;
    summary?: string;
    description?: string;
    coverImage?: string;
    images?: string[];
    attachments?: string[];
    constructor(data: any);
}
