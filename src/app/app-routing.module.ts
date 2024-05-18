import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/login.guard';

const routes: Routes = [
  {path : "",component : ProductComponent},
  {path : "products",component : ProductComponent,  canActivate: [AuthGuard]},
  {path : "products/category/:categoryId",component : ProductComponent},
  {path : "products/addProduct",component : ProductAddComponent},
  {path : "login",component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
