import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [
{
  path: "",
  component: NavbarComponent
},
{
    path: "home",
    component: HomeComponent
},
{
    path: "navbar",
    component: NavbarComponent
},
{
  path: "contact",
  component : ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
