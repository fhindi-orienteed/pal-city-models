import { MediaModel } from "../common/media.model.js";
import { NewsDescriptionModel } from "./news-description.model.js";

export class NewsModel {
    id: number;
    handle?: string;
    type: string;
    status: string;
    sequence: number;
    category: string;
    author: string;
    source?: string;
    tags: string[] = [];
    publishedAt?: string;

    description?: NewsDescriptionModel;
    media: MediaModel[] = [];

    constructor(data: any) {
        this.id = data.id;
        this.type = data.type;
        this.status = data.status;
        this.sequence = data.sequence;
        this.category = data.category;
        this.author = data.author;
        this.source = data.source;
        this.publishedAt = data.publishedAt;

        if (data.description) {
            this.description = new NewsDescriptionModel(data.description);
        }

        if (data.tags) {
            this.tags = data.tags;
        }

        if (data.media) {
            this.media = data.media.map((item: any) => new MediaModel(item));
        }
    }

    get thumbnail(): string | undefined {
        if (this.media && this.media.length > 0) {
            return this.media[0].url;
        }
        return undefined;
    }
}
