import { AddressModel } from "../address/address.model.js";
import { UserProfileModel } from "./user-profile.model.js";
export class UserModel {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.status = data.status;
        this.role = data.role;
        this.lastLogin = data.lastLogin;
        this.createdDate = data.createdDate;
        this.updatedDate = data.updatedDate;
        if (data.profile) {
            this.profile = new UserProfileModel(data.profile);
        }
        if (data.address) {
            this.address = new AddressModel(data.address);
        }
    }
}
