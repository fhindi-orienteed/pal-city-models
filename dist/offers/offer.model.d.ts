import { MediaModel } from "../common/media.model.js";
import { OfferDescriptionModel } from "./offer-description.model.js";
export declare class OfferModel {
    id: number;
    handle: string;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
    updatedDate: Date;
    status: string;
    tags: string[];
    description?: OfferDescriptionModel;
    media: MediaModel[];
    constructor(data: any);
    get thumbnail(): string | undefined;
}
