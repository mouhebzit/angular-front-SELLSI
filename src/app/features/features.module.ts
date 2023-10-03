import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";

import {NgForOf} from "@angular/common";
import { RouterModule } from '@angular/router';
import {CarouselComponent} from "./home/carousel.component";
import {HomeProduct} from "./home/product/home.product";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HomeProduct,
    ProductDetailComponent,

  ],
  imports: [
    NgForOf,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HomeComponent,
    CarouselComponent,

  ],

})
export class FeaturesModule { }
