import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from "../shared/product";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { DataTableDirective } from 'angular-datatables';
import { ProductService  } from "./product.service";
import { NotificationService } from '../toastr.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnDestroy, OnInit, AfterViewInit {

  dtOptions: DataTables.Settings = {};

  productsComponent: Product[] = [];

  product!: Product;

  @ViewChild('closebutton') closebutton: any;

  dtTrigger: Subject<any> = new Subject<any>();

  operation: string = '';

  responseMessage: string = '';

  msgApplication = "Prodcut Application";

  constructor(private productService: ProductService,
              private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve:true,
      paging: true,
      order: [[1, "asc"]],
      autoWidth: true,
      responsive: true
      //dom: 'Bfrtip',
      //  buttons: [
      //      'copy', 'csv', 'excel', 'print'
      //  ]
    };

    //this.initProductComponent();
    this.loadProductsComponent();
  }

  productUpdateForm = new FormGroup({
    id: new FormControl({value:'', disabled: true}),
    ref: new FormControl({value:'', disabled: true}),
    name: new FormControl('', Validators.required),
    qty: new FormControl(0),
    unitPrice: new FormControl(0)
  });

  productDeleteForm = new FormGroup({
    id: new FormControl({value:'', disabled: true}),
    ref: new FormControl({value:'', disabled: true}),
    name: new FormControl({value:'', disabled: true}),
  });


  initProductComponent(){
    //this.selectedProduct = new Product();
  }

  loadProductsComponent(){
    this.productService.getProductsService().subscribe(
      data => {
        this.productsComponent = data;
        this.dtTrigger.next();
      },
      errorMsg => {this.notifyService.showError(errorMsg.error,this.msgApplication)},
      () => {console.log('loading product was done')},
    );
  }

  onClickUpdate(id: any){
    this.operation = 'edit';
    this.productService.getProductServiceById(id).subscribe(
      responseData => {
        this.product = responseData;
        console.log(this.product);
        this.prepareForm();
      },
      errorMessage => {
        console.log(errorMessage);
        this.notifyService.showError(errorMessage.error.error, this.msgApplication);
      }
    );
  }

  prepareForm(){
    if (this.operation == 'edit'){
      this.productUpdateForm.setValue({
        id: this.product.id,
        ref: this.product.ref,
        name: this.product.name,
        qty: this.product.qty,
        unitPrice: this.product.unitPrice
      });
    }else if (this.operation == 'delete'){
      this.productDeleteForm.setValue({
        id: this.product.id,
        ref: this.product.ref,
        name: this.product.name,
      });
    }
  }

  onClickDelete(id: any){
    this.operation = 'delete';
    this.productService.getProductServiceById(id).subscribe(
      responseData => {
        this.product = responseData;
        console.log(this.product);
        this.prepareForm();
      },
      errorMessage => {
        console.log(errorMessage);
        this.notifyService.showError(errorMessage.error.error, this.msgApplication);
      }
    );
  }

  onSubmit(){
    if (this.operation == 'edit'){
      let product = new Product;
      console.log(this.productUpdateForm.getRawValue().id);
      console.log(this.productUpdateForm.getRawValue().ref);
      product.id = this.productUpdateForm.getRawValue().id;
      product.ref = this.productUpdateForm.getRawValue().ref;
      product.name = this.productUpdateForm.value.name;
      product.qty = this.productUpdateForm.value.qty;
      product.unitPrice = this.productUpdateForm.value.unitPrice;
      this.productService.updateProductService(product).subscribe(
        responseData => {
          this.responseMessage = 'Successfully updated';
          this.notifyService.showSuccess(this.responseMessage,this.msgApplication);
          this.closebutton.nativeElement.click();
          this.loadProductsComponent();
        },
        errorMessage => {
          console.log(errorMessage);
          this.notifyService.showError(errorMessage.error.error, this.msgApplication);
        }
      )
    }else if(this.operation == 'delete'){
      let id = this.productDeleteForm.getRawValue().id;
      this.productService.deleteProductService(id).subscribe(
        responseData => {
          this.responseMessage = 'Successfully deleted';
          this.notifyService.showSuccess(this.responseMessage,this.msgApplication);
          this.closebutton.nativeElement.click();
          this.loadProductsComponent();
        },
        errorMessage => {
          console.log(errorMessage);
          this.notifyService.showError(errorMessage.error.error, this.msgApplication);
        }
      )
    }
  }

  cancelProductComponent(){
    this.initProductComponent();
  }

  ngAfterViewInit(): void{
    this.dtTrigger.next();
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

}
