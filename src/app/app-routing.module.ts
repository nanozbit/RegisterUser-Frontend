import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'list-user', component:ListUserComponent},
  {path: 'create-user', component:CreateUserComponent},
  {path: 'create-user/:id', component:CreateUserComponent},
  {path: '', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
