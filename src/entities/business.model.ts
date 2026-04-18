import EntityModel from "./entity.model.js";
import AddressModel from "../address/address.model.js";

export class BusinessModel extends EntityModel {
    title: string;
    summary: string;
    coverImage: string;
    tags: string[];

    address?: AddressModel;

    constructor(data: any) {
        super(data);

        this.title = data.title;
        this.summary = data.summary;
        this.coverImage = data.coverImage;
        this.tags = data.tags || [];

        this.address = data.address ? new AddressModel(data.address) : undefined;
    }
}