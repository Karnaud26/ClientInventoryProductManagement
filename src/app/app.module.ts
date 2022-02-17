import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { CookieService } from "ngx-cookie-service";

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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from "./app.service";
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';

//declare const toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
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
    NotificationService,
    AppService,
    {
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthInterceptor, multi:true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
