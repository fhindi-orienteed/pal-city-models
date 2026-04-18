export class MediaModel {
    url: string;
    type: string;
    isDefault: boolean;

    constructor(data: any) {
        this.url = data.url;
        this.type = data.type;
        this.isDefault = data.isDefault;
    }
}