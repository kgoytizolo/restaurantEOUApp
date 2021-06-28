import { NgModule } from '@angular/core';                   
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplainComponent } from './complain/complain.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },      
  { path: 'home', component: HomeComponent  },           
  { path: 'complain', component: ComplainComponent  },                
  { path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)  
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
