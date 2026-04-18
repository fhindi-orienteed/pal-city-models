import AddressModel from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";
import { MediaModel } from "../common/media.model.js";
import EventDescriptionModel from "./event-description.model.js";
export declare class EventModel {
    id: number;
    handle: string;
    tags: string[];
    status: string;
    sequence: number;
    category?: string;
    visibility?: string;
    type?: string;
    startDate?: string;
    endDate?: string;
    isFullDay: boolean;
    thumbnail?: string;
    registrationStatus?: string;
    ticketType?: string;
    media: MediaModel[];
    description?: EventDescriptionModel;
    address?: AddressModel;
    organizer?: EventOrganizerModel;
    constructor(data: any);
}
