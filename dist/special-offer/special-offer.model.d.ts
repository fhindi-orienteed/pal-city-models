export declare class SpecialOfferModel {
    id: number;
    identifier: string;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
    updatedDate: Date;
    status: string;
    description?: SpecialOfferDescriptionModel;
    constructor(data: any);
}
export declare class SpecialOfferDescriptionModel {
    id: number;
    specialOfferId: number;
    langId: number;
    title: string;
    summary: string;
    description?: string;
    tags: string[];
    coverImage: string;
    constructor(data: any);
}
