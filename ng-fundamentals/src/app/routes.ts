import { Routes } from '@angular/router';
// Encara que l'ESLint ens cridi necessitem importar aquest modul, sino no el reconeix
import { UserModule } from './user/user.module';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  // Before resolving this route call this EventListResolver, and when this finished and return us some data,
  // add this data to the route as a property name events.
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];
// When a route starts with '/user' load the UserModule from this path
