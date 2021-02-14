import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchListComponent } from './components/search-list/search-list.component';

//Routing Variable

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search', component: SearchListComponent },
  { path: 'search/:query', component: SearchListComponent },
  { path: '**', redirectTo: '/' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
