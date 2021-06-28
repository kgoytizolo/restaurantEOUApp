import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { RegisterComponent } from './register/register.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';

@NgModule({
    declarations: [
        UserProfileComponent,
        RegisterComponent,
        ChangePwdComponent
    ],
    imports: [
        CommonModule,                    //Uses: gIf, NgForOf, DecimalPipe, and so on
        UserProfileRoutingModule         //Defines customized routing        
    ],
    providers: [],
    bootstrap: [UserProfileComponent]
})

export class UserProfileModule { }