import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../model/base.response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListingService {

  private LISTING_API = 'assets/dummy-data/product-list.json';

  constructor(private httpClient: HttpClient) {
  }

  getProductList(): Observable<BaseResponseModel> {
    return this.httpClient.get<BaseResponseModel>(this.LISTING_API);
  }

}
