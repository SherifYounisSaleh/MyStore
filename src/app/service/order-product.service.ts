import { assertPlatform, Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private product: Product[] = [];
  constructor() { }
  addProduct(orderProduct: Product) {

    for (let orderProd of this.product) {

      if (orderProd.id === orderProduct.id) {
        // alert('if'+prodObj.id + orderProduct.id)
        orderProd.quantity += orderProduct.quantity
        alert('You add Product   ' + orderProduct.name)
        return
      }

    }
    this.product.push(orderProduct);
    alert('You add Product    ' + orderProduct.name)
  }

  getProducts(): Product[] {
    return this.product;
  }
  clearProducts() {
    this.product = [];
  }
  DelFromCart(orderProduct: Product) {
    let index: number = this.product.indexOf(orderProduct);
    let removed = this.product.splice(index, 1);
    console.log(index + "_" + removed.entries)
    alert('You Delete Product   ' + orderProduct.name)

    //  delete this.product[index];
  }
}
