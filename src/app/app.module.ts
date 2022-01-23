import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductMockService } from "./product/product.mock.service";
import { NavbarComponent } from './menu/navbar/navbar.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
