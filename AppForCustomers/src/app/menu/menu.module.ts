import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersFollowUpComponent } from './orders/follow-up/follow-up.component';

@NgModule({
    declarations:[
        MenuComponent,
        MenuListComponent,
        OrdersComponent,
        OrdersFollowUpComponent      
    ],
    imports:[  
        NgbModule,  
        CommonModule,              
        MenuRoutingModule         
    ],
    providers: [],
    bootstrap: [MenuComponent]        
})

export class MenuModule { }