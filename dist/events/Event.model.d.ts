export declare class EventModel {
    id: number;
    identifier: string;
    category: string;
    tags: string[];
    status: string;
    visibility: string;
    sequence: number;
    type: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    startDate: string;
    endDate: string;
    isFullDay: boolean;
    coverImage: string;
    media: string[];
    registrationStatus: string;
    ticketType: string;
    constructor(data: any);
}
