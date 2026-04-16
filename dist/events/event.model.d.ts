import { AddressModel } from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";
export declare class EventModel {
    id: number;
    handle: string;
    category?: string;
    tags?: string[];
    status?: string;
    visibility?: string;
    sequence?: number;
    type?: string;
    title?: string;
    shortDescription?: string;
    longDescription?: string;
    startDate?: string;
    endDate?: string;
    isFullDay?: boolean;
    coverImage?: string;
    media?: string[];
    registrationStatus?: string;
    ticketType?: string;
    address?: AddressModel;
    organizer?: EventOrganizerModel;
    constructor(data: any);
}
