import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";

import { ProductComponent } from './product/product.component';
//import { ProductMockService } from './product/product.mock.service';
import { ProductService } from "./product/product.service";
import { NavbarComponent } from './menu/navbar/navbar.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    //ProductMockService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
