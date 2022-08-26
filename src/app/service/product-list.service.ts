import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  
  constructor(private http:HttpClient) {
    
   }
   public getproducts(): Observable<Product[]>{
    return this.http.get<Product[]>('/assets/data.json');
  }
}
