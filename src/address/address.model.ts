
import LocationModel from "./location.model.js";

export default class AddressModel {
  country: string;
  state: string;
  city: string;

  addressLine1?: string;
  addressLine2?: string;

  zipCode?: string;

  location?: LocationModel;

  constructor(data: any) {
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