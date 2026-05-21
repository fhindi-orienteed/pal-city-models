
export class UserProfileModel {
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

    constructor(data: any) {
        this.id = data.id;
        this.userId = data.userId;
        this.firstName = data.firstName;
        this.middleName = data.middleName;
        this.lastName = data.lastName;
        this.gender = data.gender;
        this.birthday = data.birthday;
        this.phone = data.phone;
        this.mobile = data.mobile;
        this.email = data.email;
        this.image = data.image;
        this.createdDate = data.createdDate;
        this.updatedDate = data.updatedDate;
    }
}