import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MaterialModule} from "../../assets/material.module";

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ParfumesComponent} from "./components/header/submenu/parfumes/parfumes.component";
import {SubmenuProduct} from "./components/header/submenu/item/submenu.product";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {BlankComponent} from "./components/header/blank.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterLink} from "@angular/router";
import { StarRatingComponent } from './components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ParfumesComponent,
    SubmenuProduct,
    BlankComponent,
    SidebarComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCheckboxModule,
    RouterLink,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],

})
export class SharedModule { }
