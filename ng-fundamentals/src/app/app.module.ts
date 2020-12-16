import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http call
import { HttpClientModule } from '@angular/common/http';

// Components
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  LocationValidator,
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

//Services
import {
  EventService,
  EventListResolver,
  VoterService,
  EventResolver,
} from './events/index';
import {
  JQ_TOKEN,
  TOASTER_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index';

import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  // Components, pipes or directors
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],

  // To import other modules available to this module. [Services, pipes or components ]
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  // Services
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },

    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  return true;
}
