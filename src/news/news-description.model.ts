
export class NewsDescriptionModel {
    title?: string;
    shortDescription?: string;
    longDescription?: string;

    constructor(data: any) {
        this.title = data.title;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
    }
}