import { Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FormComponent } from './Components/form/form.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: FormComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];