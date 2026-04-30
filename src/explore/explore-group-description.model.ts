export default class ExploreGroupDescriptionModel {
    id: number;
    groupId: number;
    title?: string;
    description?: string;

    constructor(data: any) {
        this.id = data.id;
        this.groupId = data.groupId;
        this.title = data.title;
        this.description = data.description;
    }
}
