import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product } from "../shared/product";
import { ProductService  } from "./product.service";
import { NotificationService } from '../toastr.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  productForm!: FormGroup;

  operation: string = 'add';

  selectedProduct: any;

  msgApplication = "Product Application";

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private notifyService: NotificationService) {

    this.createForm();

  }

  ngOnInit(): void {
    this.initProductComponent();
  };

  createForm(){
    this.productForm = this.fb.group({
      id:0,
      ref:['', Validators.required],
      name:['', Validators.required],
      qty: '',
      unitPrice: '',
    });
  }

  addProductComponent(){
    const p = this.productForm.value;
    this.productService.addProductService(p).subscribe(
      responseMessage  => {
        console.log(responseMessage)
        this.notifyService.showSuccess("Product add sucessfully", this.msgApplication);
        this.initProductComponent();
      },
      errorMessage => { console.log(errorMessage); this.notifyService.showError(errorMessage.error, this.msgApplication);
      }
    );
  }

  editProductComponent(){
    this.productService.updateProductService(this.selectedProduct).subscribe(
      response  => {
        console.log(response);
        this.initProductComponent();
      },
      error => {
        console.log(error);
      });
  }

  initProductComponent(){
    this.selectedProduct = new Product();
  }

  cancelProductComponent(){
    this.initProductComponent();
  }
}
