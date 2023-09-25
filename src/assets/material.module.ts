import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
@NgModule({

  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class MaterialModule{ }
