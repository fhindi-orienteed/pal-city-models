import { AddressModel } from "../address/address.model.js";
import { EntityAttributeModel } from "./entity-attribute.model.js";
import { EntityDescriptionModel } from "./entity-description.model.js";

export class EntityModel {
    id: number;
    handle: string;
    type: string;
    status: string;
    createdAt: Date;
    rate?: number;

    description?: EntityDescriptionModel;
    address?: AddressModel;
    attributes?: EntityAttributeModel[];

    constructor(data: any) {
        this.id = data.id;
        this.handle = data.identifier;
        this.type = data.type;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.rate = data.rate || 0;
        this.attributes = data.attributes?.map((attribute: any) => new EntityAttributeModel(attribute)) || [];

        if (data.address) {
            this.address = new AddressModel(data.address);
        }

        if (data.description) {
            this.description = new EntityDescriptionModel(data.description);
        }
    }
}

