import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::moz-placeholder {
        color: #999;
      }
      .error :moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent;
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  // We have to inject router and call navigate to be able to navigate to main page
  cancel() {
    this.router.navigate(['/events']);
  }
}
