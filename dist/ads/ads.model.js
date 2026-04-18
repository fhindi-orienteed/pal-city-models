import { AdsDescriptionModel } from "./ads-description.model";
export class AdsModel {
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
        this.status = data.status || 'draft';
        this.sequence = data.sequence || 0;
        if (data.description && data.description.length > 0) {
            this.description = new AdsDescriptionModel(data.description[0]);
        }
    }
}
