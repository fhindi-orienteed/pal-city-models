import { AddressModel } from "../address/address.model.js";
import { UserProfileModel } from "./user-profile.model.js";
export class UserModel {
    constructor(data) {
        var _a;
        this.id = data.id;
        this.userName = data.userName;
        this.password = data.password;
        this.status = data.status;
        this.roles = ((_a = data.userRoles) === null || _a === void 0 ? void 0 : _a.map((ur) => ur.roleId)) || [];
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
