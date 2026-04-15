export class EventModel {
    constructor(data) {
        var _a;
        this.id = data.id;
        this.identifier = data.identifier;
        this.category = data.category;
        this.tags = data.tags;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.isFullDay = (_a = data.isFullDay) !== null && _a !== void 0 ? _a : false;
        this.coverImage = data.coverImage;
        this.media = data.media || [];
        this.status = data.status;
        this.sequence = data.sequence;
        this.type = data.type;
        this.visibility = data.visibility;
        this.registrationStatus = data.registrationStatus;
        this.ticketType = data.ticketType;
    }
}
