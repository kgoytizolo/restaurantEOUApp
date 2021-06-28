import { NgModule } from '@angular/core';                   
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },      
  { path: 'home', component: HomeComponent  },           
  { path: 'login', component: LoginComponent  },  
  { path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)  
  },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)
  },  
  { path: '**', component: NotFoundComponent }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]                                   
})                                                          
export class AppRoutingModule { }
