import { CityDescriptionModel } from "./city-description.model.js";

export class CityModel {
    handle: string;
    status: string;
    sequence: number;
    thumbnail?: string;

    description?: CityDescriptionModel;

    constructor(data: any) {
        this.handle = data.handle;
        this.status = data.status;
        this.sequence = data.sequence;
        this.thumbnail = data.thumbnail;

        if (data.description && Array.isArray(data.description) && data.description.length > 0) {
            this.description = new CityDescriptionModel(data.description[0]);
        } else if (data.description) {
            this.description = new CityDescriptionModel(data.description);
        }
    }
}