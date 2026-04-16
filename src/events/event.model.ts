import { AddressModel } from "../address/address.model.js";
import { EventOrganizerModel } from "./event-organizer.model.js";

export class EventModel {
  id: number;
  handle: string;

  category?: string;
  tags?: string[];
  status?: string;
  visibility?: string;
  sequence?: number;
  type?: string;

  title?: string;
  shortDescription?: string;
  longDescription?: string;

  startDate?: string;
  endDate?: string;
  isFullDay?: boolean;

  coverImage?: string;
  media?: string[];
  registrationStatus?: string;
  ticketType?: string;
  address?: AddressModel;
  organizer?: EventOrganizerModel;

  constructor(data: any) {
    this.id = data.id;
    this.handle = data.handle;
    this.category = data.category;
    this.tags = data.tags;
    this.title = data.title;
    this.shortDescription = data.shortDescription;
    this.longDescription = data.longDescription;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.isFullDay = data.isFullDay ?? false;
    this.coverImage = data.coverImage;
    this.media = data.media || [];
    this.status = data.status;
    this.sequence = data.sequence;
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
  }
}