import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './container/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', redirectTo: '' },
  { path: 'header', component: HeaderComponent },
  { path: 'nav', component: NavComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
