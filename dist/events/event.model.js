import { AddressModel } from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";
import { MediaModel } from "../common/media.model.js";
import { EventDescriptionModel } from "./event-description.model.js";
export class EventModel {
    constructor(data) {
        this.tags = [];
        this.media = [];
        this.id = data.id;
        this.handle = data.handle || "";
        this.category = data.category;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.isFullDay = !!data.isFullDay;
        this.status = data.status || 'draft';
        this.sequence = data.sequence || 0;
        this.type = data.type;
        this.visibility = data.visibility;
        this.registrationStatus = data.registrationStatus;
        this.ticketType = data.ticketType;
        if (Array.isArray(data.tags)) {
            this.tags = data.tags;
        }
        else if (typeof data.tags === "string") {
            this.tags = data.tags.split(",").filter((t) => t.trim() !== "");
        }
        if (data.description) {
            if (Array.isArray(data.description) && data.description.length > 0) {
                this.description = new EventDescriptionModel(data.description[0]);
            }
            else {
                this.description = new EventDescriptionModel(data.description);
            }
        }
        if (data.address) {
            this.address = new AddressModel(data.address);
        }
        if (data.organizer) {
            this.organizer = new EventOrganizerModel(data.organizer);
        }
        if (data.media) {
            this.media = data.media.map((m) => new MediaModel(m));
            if (this.media.length > 0) {
                const defaultMedia = this.media.find((m) => m.isDefault);
                this.thumbnail = defaultMedia ? defaultMedia.url : this.media[0].url;
            }
        }
    }
}
