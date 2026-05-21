import { LocationModel } from "./location.model.js";
export class AddressModel {
    constructor(data) {
        this.city = data.city;
        this.state = data.state;
        this.country = data.country;
        this.zipCode = data.zipCode;
        if (data.description) {
            this.addressLine1 = data.description.addressLine1;
            this.addressLine2 = data.description.addressLine2;
        }
        if (data.latitude && data.longitude) {
            this.location = new LocationModel(data);
        }
    }
}
