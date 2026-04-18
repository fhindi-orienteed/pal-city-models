import EntityModel from "./entity.model";
import AddressModel from "../address/address.model";
export declare class BusinessModel extends EntityModel {
    title: string;
    summary: string;
    coverImage: string;
    tags: string[];
    address?: AddressModel;
    constructor(data: any);
}
