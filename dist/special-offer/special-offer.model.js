export class SpecialOfferModel {
    constructor(data) {
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
    constructor(data) {
        var _a;
        this.id = data.id;
        this.specialOfferId = data.specialOfferId;
        this.langId = data.langId;
        this.title = data.title;
        this.summary = data.summary;
        this.description = data.description;
        this.tags = ((_a = data.tags) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
        this.coverImage = data.coverImage;
    }
}
