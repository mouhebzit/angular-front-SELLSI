import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ProductListComponent} from "./product-list.component";
import {ProductListRouting} from "./product-list.routing";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {FeaturesModule} from "../features.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductListRouting,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatGridListModule,
        FeaturesModule,
        MatSidenavModule,
        MatExpansionModule,
    ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductListModule {}
