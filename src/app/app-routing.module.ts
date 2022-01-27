import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from "./product/product.compenent";
import { DashboardComponent } from "./dashboard/dashboard.compenent";

const appRoutes: Routes = [
  {path: 'product', compenent: ProductComponent},
  {path: 'dashboard', compenent: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
