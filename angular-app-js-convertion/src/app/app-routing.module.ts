import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPageComponent } from './components/grid-page/grid-page.component';
import { HomeComponent } from './components/home/home.component';
import { ReversorControllerComponent } from './components/reversor-controller/reversor-controller.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grid-page', component: GridPageComponent },
  { path: 'reversor', component: ReversorControllerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
