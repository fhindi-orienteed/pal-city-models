import AddressModel from "../address/address.model";
import EntityAttributeModel from "./entity-attribute.model";
import EntityDescriptionModel from "./entity-description.model";
export default class EntityModel {
    id: number;
    identifier: string;
    type: string;
    status: string;
    createdAt: Date;
    rate?: number;
    description?: EntityDescriptionModel;
    address?: AddressModel;
    attributes?: EntityAttributeModel[];
    constructor(data: any);
}
