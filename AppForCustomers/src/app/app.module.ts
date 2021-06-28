import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComplainComponent } from './complain/complain.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackgroundComponent } from './UI/background/background.component';
import { FooterComponent } from './UI/footer/footer.component';
import { NavBarComponent } from './UI/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComplainComponent,
    NotFoundComponent,
    BackgroundComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
