export class Event {

  name: string;

  mobile: string;

  email: string;

  category: string;

  time: string;

  eventUrl: string;

  eventDescription: string;

  address: string;

  caption: string;

    constructor(name: string,
                mobile: string,
                email: string,
                category: string,
                time: string,
                eventUrl: string,
                eventDescription: string,
                address: string,
                caption: string) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.category = category;
    this.time = time;
    this.eventUrl = eventUrl;
    this.eventDescription = eventDescription;
    this.address = address;
    this.caption = caption;
  }

}
