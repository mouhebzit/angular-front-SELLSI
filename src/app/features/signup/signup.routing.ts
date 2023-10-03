import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from "./signup.component";


const signUpRoutes: Routes = [
  { path: '', component: SignupComponent }
];

export const signupRouting = RouterModule.forChild(signUpRoutes);
