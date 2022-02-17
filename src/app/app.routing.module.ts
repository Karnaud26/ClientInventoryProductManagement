import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from "./product/product-list.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductResolver } from "./product/product.resolver";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'home',
    component : HomeComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'productlist',
        component: ProductListComponent,
        resolve:{
          productlist: ProductResolver
        },
        outlet: 'contentOutlet'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  providers: [ProductResolver]
})

export class AppRoutingModule {}
