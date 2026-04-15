export class AddressModel {
  country: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: string;

  constructor(data: any) {
    this.country = data?.country || "";
    this.state = data?.state || "";
    this.city = data?.city || "";
    this.addressLine1 = data?.addressLine1 || "";
    this.addressLine2 = data?.addressLine2 || "";
    this.zipCode = data?.zipCode || "";
  }
}