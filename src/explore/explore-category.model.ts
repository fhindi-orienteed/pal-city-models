
export default class ExploreCategoryModel {
    id: number;
    totalItems: number;
    sequence: number;
    status: string;
    title?: string;
    thumbnail?: string;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.totalItems = data.totalItems || 0;
        this.status = data.status || 'active';
        this.sequence = data.sequence || 0;
        this.thumbnail = data.thumbnail;
    }
}
