import AddressModel from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";
import { MediaModel } from "../common/media.model.js";

export class EventModel {
  id: number;
  handle: string;
  tags: string[];
  status: string;
  sequence: number;


  category?: string;
  visibility?: string;
  type?: string;

  title?: string;
  shortDescription?: string;
  longDescription?: string;

  startDate?: string;
  endDate?: string;
  isFullDay: boolean;

  thumbnail?: string;
  media: MediaModel[] = [];
  registrationStatus?: string;
  ticketType?: string;
  address?: AddressModel;
  organizer?: EventOrganizerModel;

  constructor(data: any) {
    this.id = data.id;
    this.handle = data.handle || "";
    this.category = data.category;
    this.tags = data.tags?.split(",").filter((t: string) => t.trim() !== "") || [];

    this.title = data.title;
    this.shortDescription = data.shortDescription;
    this.longDescription = data.longDescription;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.isFullDay = !!data.isFullDay;

    this.status = data.status || 'draft';
    this.sequence = data.sequence || 0;
    this.type = data.type;
    this.visibility = data.visibility;
    this.registrationStatus = data.registrationStatus;
    this.ticketType = data.ticketType;

    if (data.address) {
      this.address = new AddressModel(data.address);
    }

    if (data.organizer) {
      this.organizer = new EventOrganizerModel(data.organizer);
    }

    if (data.media) {
      this.thumbnail = data.media.find((m: any) => m.isDefault)?.url;
      this.media = data.media.map((m: any) => new MediaModel(m));
    }
  }
}