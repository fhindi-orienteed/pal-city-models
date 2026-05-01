import { MediaModel } from "../common/media.model.js";
import { EntityModel } from "./entity.model.js";
import { OpeningHoursModel } from "../common/opening-hours.model.js";
import { SocialLinksModel } from "../common/social-links.model.js";
export declare class BusinessModel extends EntityModel {
    thumbnail?: string;
    media: MediaModel[];
    tags: string[];
    openingHours?: OpeningHoursModel;
    socialLinks?: SocialLinksModel;
    constructor(data: any);
}
