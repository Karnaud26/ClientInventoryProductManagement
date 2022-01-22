import { Component, OnInit } from '@angular/core';
import {  Product } from "../shared/product";
import {  ProductMockService } from "./product.mock.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
  //providers:[ProductMockService]
})
export class ProductComponent implements OnInit {

  Products!: Product[];
  constructor(private productMockService: ProductMockService) {};

  ngOnInit(): void {
    this.Products = this.productMockService.getAllProduct();
  }
}
