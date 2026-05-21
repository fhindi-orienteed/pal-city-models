export class UserProfileModel {
    constructor(data) {
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
