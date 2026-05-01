import { AddressModel } from "../address/address.model.js";
import { EntityAttributeModel } from "./entity-attribute.model.js";
import { EntityDescriptionModel } from "./entity-description.model.js";
export declare class EntityModel {
    id: number;
    handle: string;
    type: string;
    status: string;
    createdAt: Date;
    rate?: number;
    description?: EntityDescriptionModel;
    address?: AddressModel;
    attributes?: EntityAttributeModel[];
    constructor(data: any);
}
