import {EventEmitter} from "@angular/core";
import {MyEvent} from "../etc/MyEvent";

export class EventService {
  events = new EventEmitter<MyEvent>();


  newevent(data: MyEvent) {
    this.events.emit(data);
  }

}
