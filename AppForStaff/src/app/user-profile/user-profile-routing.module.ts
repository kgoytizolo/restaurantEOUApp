import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { RegisterComponent } from './register/register.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    { path: '', component: UserProfileComponent  },    
    { path: 'register', component: RegisterComponent  },
    { path: 'changePwd', component: ChangePwdComponent  },    
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class UserProfileRoutingModule {}