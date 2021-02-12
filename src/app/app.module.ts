import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Router
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MovieDetailComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
