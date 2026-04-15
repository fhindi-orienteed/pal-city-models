export class EventOrganizerModel {
    id: number;
    name: string;
    logo?: string;
    website?: string;
    email?: string;
    phone?: string;
    mobile?: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.logo = data.logo;
        this.website = data.website;
        this.email = data.email;
        this.phone = data.phone;
        this.mobile = data.mobile;
    }
}