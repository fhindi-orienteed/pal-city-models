import { MediaModel } from "../common/media.model.js";
import { EntityModel } from "./entity.model.js";
import { OpeningHoursModel } from "../common/opening-hours.model.js";
import { SocialLinksModel } from "../common/social-links.model.js";

export class BusinessModel extends EntityModel {
    thumbnail?: string;
    media: MediaModel[] = [];
    tags: string[] = [];
    openingHours?: OpeningHoursModel;
    socialLinks?: SocialLinksModel;

    constructor(data: any) {
        super(data);

        if (Array.isArray(data.tags)) {
            this.tags = data.tags;
        } else if (typeof data.tags === "string") {
            this.tags = data.tags.split(",").filter((t: string) => t.trim() !== "");
        }

        if (data.media) {
            this.media = data.media.map((m: any) => new MediaModel(m));
            if (this.media.length > 0) {
                const defaultMedia = this.media.find((m: MediaModel) => m.isDefault);
                this.thumbnail = defaultMedia ? defaultMedia.url : this.media[0].url;
            }
        }

        if (data.openingHours) {
            this.openingHours = new OpeningHoursModel(data.openingHours);
        }

        if (data.socialLinks) {
            this.socialLinks = new SocialLinksModel(data.socialLinks);
        }
    }
}