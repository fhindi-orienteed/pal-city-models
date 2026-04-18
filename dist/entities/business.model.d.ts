import EntityModel from "./entity.model.js";
import AddressModel from "../address/address.model.js";
export declare class BusinessModel extends EntityModel {
    title: string;
    summary: string;
    coverImage: string;
    tags: string[];
    address?: AddressModel;
    constructor(data: any);
}
