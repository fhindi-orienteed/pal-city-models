export default class ServiceModel {
    id: number;
    title: string;
    thumbnail: string;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.thumbnail = data.thumbnail;
    }
}