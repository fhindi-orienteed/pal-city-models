import { EntityModel } from "./Entity.model";
import { AddressModel } from "../address/Address.model";
export declare class BusinessModel extends EntityModel {
    title: string;
    summary: string;
    description: string;
    coverImage: string;
    tags: string[];
    address?: AddressModel;
    constructor(data: any);
}
