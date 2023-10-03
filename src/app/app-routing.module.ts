import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";


const routes: Routes = [
  {
    path:'product/:id', 
    loadChildren: () => import('./features/product-detail/product.module').then(m => m.ProductModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/product-list.module').then(m => m.ProductListModule)
  },
  {
    path:'', component: HomeComponent
  },
  {
    path: '**' , redirectTo: '' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
