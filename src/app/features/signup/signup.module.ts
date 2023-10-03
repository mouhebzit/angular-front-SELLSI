import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SignupComponent} from "./signup.component";
import {signupRouting} from "./signup.routing";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    signupRouting,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule {}
