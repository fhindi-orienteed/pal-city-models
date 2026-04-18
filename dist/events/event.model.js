import AddressModel from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";
import { MediaModel } from "../common/media.model.js";
export class EventModel {
    constructor(data) {
        var _a, _b;
        this.media = [];
        this.id = data.id;
        this.handle = data.handle || "";
        this.category = data.category;
        this.tags = ((_a = data.tags) === null || _a === void 0 ? void 0 : _a.split(",").filter((t) => t.trim() !== "")) || [];
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.isFullDay = !!data.isFullDay;
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
        if (data.media) {
            this.thumbnail = (_b = data.media.find((m) => m.isDefault)) === null || _b === void 0 ? void 0 : _b.url;
            this.media = data.media.map((m) => new MediaModel(m));
        }
    }
}
