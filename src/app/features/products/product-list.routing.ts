import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list.component";



const productListRoutes: Routes = [
  { path: '', component: ProductListComponent }
];

export const ProductListRouting = RouterModule.forChild(productListRoutes);
