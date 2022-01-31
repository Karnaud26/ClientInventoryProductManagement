import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from 'rxjs';
import {  Product } from "../shared/product";
import { DataTableDirective } from 'angular-datatables';
//import {  ProductMockService } from "./product.mock.service";
import { ProductService  } from "./product.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChild(DataTableDirective) dtElement?: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  productsComponent: Product[] = [];
  productForm: FormGroup;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private productService: ProductService, private fb: FormBuilder) {
    // On creer le formulaire dans le constructeur
    this.productForm = this.fb.group({
      ref:['', Validators.required],
      name:['', Validators.required],
      qty: '',
      unitPrice: '',
    });
  }

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
    this.loadProductsComponent();
  };

  loadProductsComponent(){
    this.productService.getProductsService().subscribe(
      data => {this.productsComponent = data;
              this.dtTrigger.next();
            },
      error => {console.log('An error was occured.')},
      () => {console.log('loading product was done')},
    );
  }

  addProductComponent(){
    const p = this.productForm.value;
    //console.log(p);
    this.productService.addProductService(p).subscribe(
      resp => {
        this.loadProductsComponent();
      }
    );
  }

  cancelProductComponent(){
    
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }
}
