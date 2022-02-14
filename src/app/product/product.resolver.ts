import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductService } from "./product.service";
import { Resolve } from "@angular/router";

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve(){
    return this.productService.getProductsService();
  }
}
