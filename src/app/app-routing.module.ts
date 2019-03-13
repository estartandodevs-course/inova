import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './container/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'header', component: HeaderComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
