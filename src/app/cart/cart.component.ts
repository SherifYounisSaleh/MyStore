import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import data from '../../assets/data.json';
import { Userdata } from '../model/Userdata';
import { Router } from '@angular/router';

import { Product } from '../model/Product';
import { OrderProductService } from '../service/order-product.service';
  
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  name: string = "";
  address: string = "";
  creditCard: string = "";
  userdata: Userdata = new Userdata();
  cartAmount:number=0;
  cartCount$: Observable<number> = new Observable<number>();

  constructor(private router: Router,private orderProduct:OrderProductService,private fb: FormBuilder){} 
  productlist:Product[]=[];
  userform!: FormGroup;
  ngOnInit(): void {
    
    this.userform=this.fb.group({
      
      fullname: ['', [Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z]+ [a-zA-Z]+$")]],//[a-zA-Z]+(\s+[a-zA-Z]+)
      address: ['', [Validators.required,Validators.minLength(3)]],
      creditCard: ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16), Validators.pattern("^[0-9]*$")]],
      
    });
    this.productlist=this.orderProduct.getProducts()
    
  }

  onSubmit(): void {
    this.userdata.fullname = this.userform.controls['fullname'].value;
    this.userdata.address = this.userform.controls['address'].value;
    this.userdata.creditCard = this.userform.controls['creditCard'].value;
    this.userdata = this.userdata;
    this.orderProduct.clearProducts()

    this.router.navigateByUrl("/confirm/"+this.cartAmount+"/"+this.userdata.fullname);
  }
  DelFromCart( product:any){
    this.orderProduct.DelFromCart(product);
    this.cartAmount-=product.price*product.quantity
  }
  calculate(prodObj:number){
    
    this.cartAmount=prodObj
    
  }
  
}
