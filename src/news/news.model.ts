import NewsDescriptionModel from "./news-description.model.js";

export default class NewsModel {
    id: number;
    type: string;
    status: string;
    sequence: number;

    description?: NewsDescriptionModel;

    constructor(data: any) {
        this.id = data.id;
        this.type = data.type;
        this.status = data.status;
        this.sequence = data.sequence;
        if (data.description && data.description.length > 0) {
            this.description = new NewsDescriptionModel(data.description[0]);
        }
    }
}
