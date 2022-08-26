import { assertPlatform, Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
 private product:Product[]=[];
  constructor() { }
  addProduct(orderProduct:Product){
    
      this.product.push(orderProduct);
   
  }
  getProducts():Product[]{
   return  this.product;
  }
  clearProducts(){
    this.product=[];
   }
   DelFromCart(orderProduct:Product){
     let index:number= this.product.indexOf(orderProduct);
     let removed = this.product.splice(index,1);
     console.log(index+"_"+removed.entries)
     
    //  delete this.product[index];
   }
}
