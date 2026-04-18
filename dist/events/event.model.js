import AddressModel from "../address/address.model";
import { EventOrganizerModel } from "./event-organizer.model";
export class EventModel {
    constructor(data) {
        var _a;
        this.id = data.id;
        this.handle = data.handle || "";
        this.category = data.category;
        this.tags = ((_a = data.tags) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.isFullDay = !!data.isFullDay;
        this.coverImage = data.coverImage;
        this.media = data.media || [];
        this.status = data.status || 'draft';
        this.sequence = data.sequence || 0;
        this.type = data.type;
        this.visibility = data.visibility;
        this.registrationStatus = data.registrationStatus;
        this.ticketType = data.ticketType;
        if (data.address) {
            this.address = new AddressModel(data.address);
        }
        if (data.organizer) {
            this.organizer = new EventOrganizerModel(data.organizer);
        }
    }
}
