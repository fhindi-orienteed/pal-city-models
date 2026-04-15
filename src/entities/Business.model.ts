import { EntityModel } from "./Entity.model";
import { AddressModel } from "../address/Address.model";

export class BusinessModel extends EntityModel {
    title: string;
    summary: string;
    description: string;
    coverImage: string;
    tags: string[];

    address?: AddressModel;

    constructor(data: any) {
        super(data);

        this.title = data.title;
        this.summary = data.summary;
        this.description = data.description;
        this.coverImage = data.coverImage;
        this.tags = data.tags || [];

        this.address = data.address ? new AddressModel(data.address) : undefined;
    }
}