import { AddressModel } from "../address/address.model.js";
import { UserProfileModel } from "./user-profile.model.js";

export class UserModel {
    id: number;
    userName: string;
    password: string;
    status: string;
    roles: number[];
    createdDate: Date;
    updatedDate?: Date;
    lastLogin?: Date;
    profile?: UserProfileModel;
    address?: AddressModel;

    constructor(data: any) {
        this.id = data.id;
        this.userName = data.userName;
        this.password = data.password;
        this.status = data.status;
        this.roles = data.userRoles?.map((ur: any) => ur.role) || [];
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
