import { NewsDescriptionModel } from "./news-description.model.js";
export class NewsModel {
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
        this.status = data.status;
        this.sequence = data.sequence;
        if (data.description && data.description.length > 0) {
            this.description = new NewsDescriptionModel(data.description[0]);
        }
    }
}
