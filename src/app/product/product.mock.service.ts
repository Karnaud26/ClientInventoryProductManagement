import { Injectable } from "@angular/core";
import { Product } from "../shared/product";

@Injectable({
	providedIn: 'root'
})
export class ProductMockService{

  private Products: Product[] = [];

  constructor(){
    let p1: Product = new Product(1,'Livre',50,20);
    let p2: Product = new Product(2,'Cahier',200,5.25);
    let p3: Product = new Product(3,'Stylo',500,2.10);
    this.Products.push(p1);
    this.Products.push(p2);
    this.Products.push(p3);
  }

  /**
   * getAllProduct
   */
  public getAllProduct(): Product[] {
    return this.Products;
  }

}
