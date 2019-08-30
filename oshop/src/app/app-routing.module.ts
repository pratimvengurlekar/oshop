import { AdminauthGuardService } from './adminauth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
  {path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGuardService]},
  {path:'my/orders',component:MyOrderComponent,canActivate:[AuthGuardService]},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'admin/admin-orders',component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminauthGuardService]},
  {path:'admin/admin-products',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminauthGuardService]},
  {path:'admin/admin-new-product',component:AdminProductFormComponent,canActivate:[AuthGuardService,AdminauthGuardService]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
