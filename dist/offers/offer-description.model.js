export class OfferDescriptionModel {
    constructor(data) {
        this.id = data.id;
        this.offerId = data.offerId;
        this.langId = data.langId;
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
    }
}
