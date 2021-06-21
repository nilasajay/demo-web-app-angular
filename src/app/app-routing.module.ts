import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './components/greet/greet.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'greet', component: GreetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
