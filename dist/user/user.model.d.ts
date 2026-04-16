export declare class UserModel {
    id: number;
    username: string;
    password: string;
    status: string;
    role: string;
    createdDate: Date;
    updatedDate: Date;
    profile?: UserProfileModel;
    constructor(data: any);
}
export declare class UserProfileModel {
    id: number;
    userId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    birthday: Date;
    phone: string;
    mobile: string;
    email: string;
    image: string;
    createdDate: Date;
    updatedDate: Date;
    constructor(data: any);
}
