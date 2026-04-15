export class AddressModel {
    constructor(data) {
        this.country = (data === null || data === void 0 ? void 0 : data.country) || "";
        this.state = (data === null || data === void 0 ? void 0 : data.state) || "";
        this.city = (data === null || data === void 0 ? void 0 : data.city) || "";
        this.addressLine1 = (data === null || data === void 0 ? void 0 : data.addressLine1) || "";
        this.addressLine2 = (data === null || data === void 0 ? void 0 : data.addressLine2) || "";
        this.zipCode = (data === null || data === void 0 ? void 0 : data.zipCode) || "";
    }
}
