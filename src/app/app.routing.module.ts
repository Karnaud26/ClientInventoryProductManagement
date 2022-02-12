import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from "./product/product-list.component";
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
