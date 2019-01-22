import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProductsAddComponent} from './components/products-add/products-add.component';
import {ProductsDetailComponent} from './components/products-detail/products-detail.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'list', component: ProductsListComponent},
  {path: 'add', component: ProductsAddComponent},
  {path: 'detail/:id', component: ProductsDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
