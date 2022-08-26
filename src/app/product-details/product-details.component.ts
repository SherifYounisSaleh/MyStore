import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import data from '../../assets/data.json'

@Component({
  selector: 'app-order',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class OrderComponent implements OnInit {
  product_id!:string;
  product:Product[]=data;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.product_id = params.get('id')!;
      
    });
    this.product = this.product.filter( (obj) => obj.id ==Number(this.product_id) );
  }
 

}
