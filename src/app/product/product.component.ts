import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import {  Product } from "../shared/product";
import {  ProductMockService } from "./product.mock.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Products!: Product[];

  productForm: FormGroup;
  constructor(private productMockService: ProductMockService, private fb: FormBuilder) {
    // On creer le formulaire dans le constructeur
    this.productForm = this.fb.group({
      ref:['', Validators.required],
      name:['', Validators.required],
      qty:['', Validators.required],
      unitprice:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.Products = this.productMockService.getAllProduct();
  }
}
