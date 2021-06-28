import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersFollowUpComponent } from './orders/follow-up/follow-up.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },                        
    { path: 'orders', component: MenuComponent,
      children: [
        { path: '', redirectTo: 'orders-list', pathMatch: 'full' },   
        { path: 'orders-list', component: OrderListComponent },                      
        { path: ':id/follow-up', component: OrdersFollowUpComponent },      //Changes statuses per role
        { path: 'orders-list/:action', component: OrderListComponent },     //Orders which requires payment    
        { path: 'orders-list/:id/payment', component: OrdersComponent },                  
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