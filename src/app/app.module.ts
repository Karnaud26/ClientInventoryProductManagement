import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from "./product/product-list.component";
import { ProductService } from "./product/product.service";
import { NavbarComponent } from './menu/navbar/navbar.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './toastr.service';

//declare const toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
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
    DataTablesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProductService,
    NotificationService
    /*{
      provide: TOASTR_TOKEN,
      useValue: toastr
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
