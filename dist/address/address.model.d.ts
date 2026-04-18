import LocationModel from "./location.model.js";
export default class AddressModel {
    country: string;
    state: string;
    city: string;
    addressLine1?: string;
    addressLine2?: string;
    zipCode?: string;
    location?: LocationModel;
    constructor(data: any);
}
