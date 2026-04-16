
export default class NewsDescriptionModel {
    title?: string;
    description?: string;
    image?: string;

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.image = data.image;
    }
}