export class SpecialOfferModel {
    id: number;
    identifier: string;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
    updatedDate: Date;
    status: string;
    description?: SpecialOfferDescriptionModel;

    constructor(data: any) {
        this.id = data.id;
        this.identifier = data.identifier;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.createdDate = data.createdDate;
        this.updatedDate = data.updatedDate;
        this.status = data.status;

        if (data.description && data.description.length > 0) {
            this.description = new SpecialOfferDescriptionModel(data.description[0]);
        }
    }
}

export class SpecialOfferDescriptionModel {
    id: number;
    specialOfferId: number;
    langId: number;
    title: string;
    summary: string;
    description?: string;
    tags: string[];
    coverImage: string;

    constructor(data: any) {
        this.id = data.id;
        this.specialOfferId = data.specialOfferId;
        this.langId = data.langId;
        this.title = data.title;
        this.summary = data.summary;
        this.description = data.description;
        this.tags = data.tags?.split(',') || [];
        this.coverImage = data.coverImage;
    }
}