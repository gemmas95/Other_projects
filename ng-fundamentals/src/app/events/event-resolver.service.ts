import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
