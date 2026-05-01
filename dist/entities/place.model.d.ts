import { MediaModel } from "../common/media.model.js";
import { OpeningHoursModel } from "../common/opening-hours.model.js";
import { SocialLinksModel } from "../common/social-links.model.js";
import { EntityModel } from "./entity.model.js";
export declare class PlaceModel extends EntityModel {
    media: MediaModel[];
    tags: string[];
    category?: string;
    openingHours?: OpeningHoursModel;
    socialLinks?: SocialLinksModel;
    constructor(data: any);
    get thumbnail(): string | undefined;
}
