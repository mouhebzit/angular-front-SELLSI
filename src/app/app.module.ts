import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "../assets/material.module";
import {SharedModule} from "./shared/shared.module";
import {FeaturesModule} from "./features/features.module";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule,
        FeaturesModule,
        MatSidenavModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
