import { Component, OnInit } from '@angular/core';
import { OrderProductService } from "../service/order-product.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  total: number =0;
  fullname:string='';
  constructor(private cart: OrderProductService,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.total = Number(params.get('cartAmount')!);
      this.fullname = params.get('fullname')!;
      
    });
  }

}
