import { MediaModel } from "../common/media.model.js";
import { EntityModel } from "./entity.model.js";
export class BusinessModel extends EntityModel {
    constructor(data) {
        super(data);
        this.media = [];
        this.tags = [];
        if (Array.isArray(data.tags)) {
            this.tags = data.tags;
        }
        else if (typeof data.tags === "string") {
            this.tags = data.tags.split(",").filter((t) => t.trim() !== "");
        }
        if (data.media) {
            this.media = data.media.map((m) => new MediaModel(m));
            if (this.media.length > 0) {
                const defaultMedia = this.media.find((m) => m.isDefault);
                this.thumbnail = defaultMedia ? defaultMedia.url : this.media[0].url;
            }
        }
    }
}
