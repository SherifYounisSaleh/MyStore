import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json'
import { Product } from '../model/Product';
import { ProductListService } from '../service/product-list.service';
import {OrderProductService} from '../service/order-product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products:Product[]=[];
   ItemCount:number=0;
  constructor(private product:ProductListService) { 
   this.product.getproducts().subscribe(res=>this.products=res) ;
  }
   
  ngOnInit(): void {
    console.log(this.product)
  }
  addItem(newItem: number) {
    this.ItemCount+=newItem;
  }

}
