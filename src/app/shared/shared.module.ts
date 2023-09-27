import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ParfumesComponent,
    SubmenuProduct,
    BlankComponent,
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
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
