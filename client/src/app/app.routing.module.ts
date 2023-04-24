import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from '../app/components/register/register.component';
import {SearchComponent} from '../app/components/search/search.component';
import {LoginComponent} from '../app/components/login/login.component';
import {NavbarComponent} from '../app/components/navbar/navbar.component';
import {RoutesComponent} from '../app/components/routes/routes.component'
import { Place } from './classes/place';

const routes: Routes = [
  { path: 'register', component: RegisterComponent ,title: 'Register page'},
  { path: 'login', component: LoginComponent ,title: 'Login page'},
  { path: 'search', component: SearchComponent ,title: 'Search your place'},
  { path: 'routes', component: RoutesComponent ,title: 'Routes', data:Place},
   {path : '', component : LoginComponent,title: 'Login page'}
];

@NgModule({
  imports: [
  
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }