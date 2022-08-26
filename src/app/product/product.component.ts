import { Component, Input, OnInit } from '@angular/core';
import data from '../../assets/data.json'
import { Product } from '../model/Product';
import { OrderProductService } from '../service/order-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any='';
  constructor(private orderProduct:OrderProductService) { }

  ngOnInit(): void {
  }
  addToCart(event:any, product:any){
  
    this.orderProduct.addProduct(product);
  }

}