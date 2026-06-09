export class CityDescriptionModel {
    title: string;
    shortDescription?: string;

    constructor(data: any) {
        this.title = data.title;
        this.shortDescription = data.shortDescription;
    }
}