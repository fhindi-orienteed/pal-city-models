import { MediaModel } from "../common/media.model.js";
import { EntityModel } from "./entity.model.js";
export declare class BusinessModel extends EntityModel {
    thumbnail?: string;
    media: MediaModel[];
    tags: string[];
    constructor(data: any);
}
