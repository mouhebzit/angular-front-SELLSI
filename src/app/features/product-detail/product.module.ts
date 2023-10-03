import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRouting } from './product.routing';


// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  imports: [
    NgxImageZoomModule,
    NgxImageZoomModule,
    productDetailRouting,

  ],
  declarations: [
    ProductDetailComponent
  ]
})
export class ProductModule {

}
