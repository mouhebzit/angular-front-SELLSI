import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRouting } from './product.routing';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';
import localeFr from '@angular/common/locales/fr';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { FeaturesModule } from '../features.module';


registerLocaleData(localeFr, 'fr');



@NgModule({
  imports: [
    NgxImageZoomModule,
    NgxImageZoomModule,
    productDetailRouting,
    NgFor,
    MatGridListModule,
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    FeaturesModule
  ],
  declarations: [
    ProductDetailComponent
  ]
})
export class ProductModule {

}
