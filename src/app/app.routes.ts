import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';

//Routing Variable

const APP_ROUTES: Routes = [{ path: 'home', component = HomeComponent }];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
