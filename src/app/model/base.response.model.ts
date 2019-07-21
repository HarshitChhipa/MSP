import { ProductDataModel } from './product.data.model';

export class BaseResponseModel {
  data: ProductDataModel[] = [];

  constructor(data = null) {
    if (data) {
      data.forEach(ele => {
        this.data.push(new ProductDataModel(ele));
      });
    }
  }
}
