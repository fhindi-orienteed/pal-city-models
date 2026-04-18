
export default class LocationModel {
    latitude?: string;
    longitude?: string;

    constructor(data: any) {
        this.latitude = data.latitude;
        this.longitude = data.longitude;
    }
}
