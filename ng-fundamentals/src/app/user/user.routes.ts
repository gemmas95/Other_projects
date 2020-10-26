import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const userRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
// In browser will look like:  /user/profile
