export class ProductDataModel {
  id: number;
  name: string;
  image: string;
  totalProducts: number;
  availableProduct: number;
  isBooking: boolean;

  constructor(data = null) {
    this.id = data.id ? data.id : this.id;
    this.name = data.name ? data.name : this.name;
    this.image = data.image ? data.image : this.image;
    this.totalProducts = data.totalProducts ? data.totalProducts : this.totalProducts;
    this.availableProduct = data.availableProduct ? data.availableProduct : this.availableProduct;
    this.isBooking = data.isBooking ? data.isBooking : this.isBooking;
  }
}
