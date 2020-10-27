import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
// import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  // This returns us an Observable
  resolve() {
    return this.eventService.getEvents();
    // .pipe(map((events) => events));
  }
}
