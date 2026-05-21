import { AddressModel } from "../address/address.model.js";
import { UserProfileModel } from "./user-profile.model.js";
export declare class UserModel {
    id: number;
    userName: string;
    password: string;
    status: string;
    role: string;
    createdDate: Date;
    updatedDate?: Date;
    lastLogin?: Date;
    profile?: UserProfileModel;
    address?: AddressModel;
    constructor(data: any);
}
