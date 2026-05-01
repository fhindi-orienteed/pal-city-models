export class SocialLinks {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
    tiktok?: string;
    linkedin?: string;
    x?: string;
    be?: string;
    whatsapp?: string;
    telegram?: string;
    snapchat?: string;


    constructor(data: any) {
        this.facebook = data.facebook;
        this.twitter = data.twitter;
        this.instagram = data.instagram;
        this.youtube = data.youtube;
        this.website = data.website;
        this.tiktok = data.tiktok;
        this.linkedin = data.linkedin;
        this.x = data.x;
        this.be = data.be;
        this.whatsapp = data.whatsapp;
        this.telegram = data.telegram;
        this.snapchat = data.snapchat;
    }
}