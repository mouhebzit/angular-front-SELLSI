import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRouting } from './product.routing';


@NgModule({
  imports: [
    productDetailRouting
  ],
  declarations: [
    ProductDetailComponent
  ]
})
export class ProductModule {

}
