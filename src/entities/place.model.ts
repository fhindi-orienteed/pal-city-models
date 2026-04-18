import EntityModel from "./entity.model.js";

export default class PlaceModel extends EntityModel {
    summary?: string;
    coverImage?: string;
    tags: string[] = [];

    constructor(data: any) {
        super(data);

        if (this.attributes && this.attributes.length > 0) {
            this.populateAttributes();
        } else {
            this.summary = data.summary;
            this.coverImage = data.coverImage;
            this.tags = data.tags ?? [];
        }
    }

    private populateAttributes() {
        this.attributes?.forEach((attr: any) => {
            switch (attr.key) {
                case 'summary':
                    this.summary = attr.value;
                    break;
                case 'coverImage':
                    this.coverImage = attr.value;
                    break;
                case 'tags':
                    try {
                        this.tags = JSON.parse(attr.value);
                    } catch {
                        this.tags = attr.value ? attr.value.split(',') : [];
                    }
                    break;
            }
        });
    }
}