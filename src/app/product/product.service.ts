import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { API_URLS } from "../config/api.url.config";
import { Product } from "../shared/product";

@Injectable()

export class ProductService {
  constructor(private httpClient: HttpClient) {

  }

  getProductsService(): Observable<any>{
    return this.httpClient.get(API_URLS.PRODUCTS_URL);
  }

	addProductService(product: Product): Observable<any>{
		return this.httpClient.post(API_URLS.ADD_PRODUCTS_URL, product)
	}

	updateProductService(product: Product): Observable<any>{
		return this.httpClient.put(API_URLS.UPDATE_PRODUCTS_URL, product)
	}

	deleteProductService(ref: string): Observable<any>{
		return this.httpClient.delete(API_URLS.DELETE_PRODUCTS_URL + `/${ref}`);
	}
}
