import { Component, OnInit } from '@angular/core';
import { BaseResponseModel } from '../../model/base.response.model';
import { ProductDataModel } from '../../model/product.data.model';
import { ProductListingService } from '../../service/product-listing.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  private baseResponseModel: BaseResponseModel;
  productList: ProductDataModel[] = [];

  constructor(private eventListingService: ProductListingService) {
  }

  ngOnInit() {
    this.eventListingService.getProductList().subscribe(res => {
      this.baseResponseModel = new BaseResponseModel(res.data);
      this.productList = this.baseResponseModel.data;
    });
  }

  /**
   * Method called when we search for any product.
   */
  searchProduct(value: string) {
    if (value.length === 0) {
      this.productList = this.baseResponseModel.data;
    } else {
      this.productList = this.baseResponseModel.data.filter(product => !product.name.toLocaleLowerCase().search(value.toLocaleLowerCase()));
    }
  }
}
