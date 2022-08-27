import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationComponent } from './order-confirm/order-confirm.component';
import { Product } from './model/Product';
import { OrderComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"productList",component:ProductListComponent},
  {path:"order",component:OrderComponent},
  {path:"cart",component:CartComponent},
  {path:"product-details/:id",component:OrderComponent},
  {path:"confirm/:cartAmount/:fullname",component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
