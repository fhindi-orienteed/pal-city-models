import AddressModel from "../address/address.model";
import { EventOrganizerModel } from "./event-organizer.model";
import { MediaModel } from "../common/media.model";
export declare class EventModel {
    id: number;
    handle: string;
    tags: string[];
    status: string;
    sequence: number;
    category?: string;
    visibility?: string;
    type?: string;
    title?: string;
    shortDescription?: string;
    longDescription?: string;
    startDate?: string;
    endDate?: string;
    isFullDay: boolean;
    thumbnail?: string;
    media: MediaModel[];
    registrationStatus?: string;
    ticketType?: string;
    address?: AddressModel;
    organizer?: EventOrganizerModel;
    constructor(data: any);
}
