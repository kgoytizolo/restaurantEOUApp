import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersFollowUpComponent } from './orders/follow-up/follow-up.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'options', pathMatch: 'full' },                        
    { path: 'options', component: MenuComponent,
      children: [
        { path: '', redirectTo: 'our-menu', pathMatch: 'full' },   
        { path: 'our-menu', component: MenuListComponent },                      
        { path: 'orders', component: OrdersComponent },               
        { path: 'orders/:id/follow-up', component: OrdersFollowUpComponent },        
        { path: '**', component: NotFoundComponent }                                
      ]
    },
    { path: 'home', component: HomeComponent }                        
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class MenuRoutingModule {}