import { MediaModel } from "../common/media.model.js";
import { OpeningHoursModel } from "../common/opening-hours.model.js";
import { SocialLinksModel } from "../common/social-links.model.js";
import { EntityModel } from "./entity.model.js";

export class PlaceModel extends EntityModel {
    media: MediaModel[] = [];
    tags: string[] = [];
    category?: string;
    openingHours?: OpeningHoursModel;
    socialLinks?: SocialLinksModel;

    constructor(data: any) {
        super(data);

        this.category = data.category;

        if (data.media) {
            this.media = data.media.map((item: any) => new MediaModel(item));
        }

        if (data.tags) {
            this.tags = data.tags;
        }

        if (data.openingHours) {
            this.openingHours = new OpeningHoursModel(data.openingHours);
        }

        if (data.socialLinks) {
            this.socialLinks = new SocialLinksModel(data.socialLinks);
        }
    }

    get thumbnail(): string | undefined {
        if (this.media && this.media.length > 0) {
            return this.media[0].url;
        }
        return undefined;
    }
}