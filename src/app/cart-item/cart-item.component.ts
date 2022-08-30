import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../model/Product";
import { OrderProductService } from "../service/order-product.service";


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartproduct: Product[] =[];
  @Output() calItemFromCart: EventEmitter<number> = new EventEmitter();
  @Output() calculateCart: EventEmitter<number> = new EventEmitter();
  cartAmount: number=0;
 

  constructor(private cart: OrderProductService) { }

  ngOnInit(): void {
    for(let prodObj of this.cartproduct){
      this.cartAmount+= prodObj.price*prodObj.quantity 
    }
    this.calculateCart.emit(this.cartAmount)
  }

  removeFromCart(product:Product): void {
 
    this.cartAmount-= product.price*product.quantity 
    this.cart.DelFromCart(product);
    this.calculateCart.emit(this.cartAmount)
   
  }

  
  calculate(){
    // this.calItemFromCart.emit(value);
      for(let proObj of this.cartproduct){
      this.cartAmount+= proObj.price*proObj.quantity  
    }
    this.calculateCart.emit(this.cartAmount);
  }
  }


