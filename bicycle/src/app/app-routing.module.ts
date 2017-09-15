import { ListingsComponent } from './listings/listings.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginregComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listings/browse', redirectTo: '/browse'},
  {path: 'listings/listings', redirectTo: '/listings'},
  {path: 'browse/listings', redirectTo: '/listings'},
  {path: 'browse/browse', redirectTo: '/browse'},
  {path: 'browse/logoff', redirectTo: '/'},
  {path: 'listings/logoff', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
