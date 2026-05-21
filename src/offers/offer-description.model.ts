
export class OfferDescriptionModel {
    id: number;
    offerId: number;
    langId: number;

    title: string;
    shortDescription?: string;
    longDescription?: string;

    constructor(data: any) {
        this.id = data.id;
        this.offerId = data.offerId;
        this.langId = data.langId;

        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;

    }
}