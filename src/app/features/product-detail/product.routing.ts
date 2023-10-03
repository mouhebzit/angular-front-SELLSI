import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from "./product-detail.component";


const productDetailRoutes: Routes = [
  { path: '', component: ProductDetailComponent }
];

export const productDetailRouting = RouterModule.forChild(productDetailRoutes);
