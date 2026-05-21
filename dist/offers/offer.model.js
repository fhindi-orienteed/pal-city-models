import { MediaModel } from "../common/media.model.js";
import { OfferDescriptionModel } from "./offer-description.model.js";
export class OfferModel {
    constructor(data) {
        this.tags = [];
        this.media = [];
        this.id = data.id;
        this.handle = data.handle;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.createdDate = data.createdDate;
        this.updatedDate = data.updatedDate;
        this.status = data.status;
        if (data.tags) {
            this.tags = data.tags;
        }
        if (data.media) {
            this.media = data.media.map((item) => new MediaModel(item));
        }
        if (data.description && data.description.length > 0) {
            this.description = new OfferDescriptionModel(data.description[0]);
        }
    }
    get thumbnail() {
        if (this.media && this.media.length > 0) {
            return this.media[0].url;
        }
        return undefined;
    }
}
