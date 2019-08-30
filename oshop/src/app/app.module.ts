import { CategoriesService } from './categories.service';
import { AdminauthGuardService } from './adminauth-guard.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminauthGuardService,
    UserService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
