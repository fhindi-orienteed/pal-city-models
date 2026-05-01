import { EntityModel } from "./entity.model.js";
export class PlaceModel extends EntityModel {
    constructor(data) {
        var _a;
        super(data);
        this.tags = [];
        if (this.attributes && this.attributes.length > 0) {
            this.populateAttributes();
        }
        else {
            this.summary = data.summary;
            this.coverImage = data.coverImage;
            this.tags = (_a = data.tags) !== null && _a !== void 0 ? _a : [];
        }
    }
    populateAttributes() {
        var _a;
        (_a = this.attributes) === null || _a === void 0 ? void 0 : _a.forEach((attr) => {
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
                    }
                    catch {
                        this.tags = attr.value ? attr.value.split(',') : [];
                    }
                    break;
            }
        });
    }
}
