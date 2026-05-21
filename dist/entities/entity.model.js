import { AddressModel } from "../address/address.model.js";
import { EntityAttributeModel } from "./entity-attribute.model.js";
import { EntityDescriptionModel } from "./entity-description.model.js";
export class EntityModel {
    constructor(data) {
        var _a;
        this.id = data.id;
        this.handle = data.identifier;
        this.type = data.type;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.rate = data.rate || 0;
        this.attributes = ((_a = data.attributes) === null || _a === void 0 ? void 0 : _a.map((attribute) => new EntityAttributeModel(attribute))) || [];
        if (data.address) {
            this.address = new AddressModel(data.address);
        }
        if (data.description) {
            this.description = new EntityDescriptionModel(data.description);
        }
    }
}
