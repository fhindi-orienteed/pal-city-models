export class EventModel {
  id: number;
  identifier: string;
  category: string;
  tags: string[];
  status: string;
  visibility: string;
  sequence: number;
  type: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  startDate: string;
  endDate: string;
  isFullDay: boolean;
  coverImage: string;
  media: string[];
  registrationStatus: string;
  ticketType: string;

  constructor(data: any) {
    this.id = data.id;
    this.identifier = data.identifier;
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
  }
}