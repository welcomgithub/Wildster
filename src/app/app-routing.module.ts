import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
const routes: Routes = [
  {path: '', component: UserloginComponent},
  { path: 'dashbord', component:DashbordComponent},
  { path: 'projectinfo',component:ProjectInfoComponent},
  {path: 'userReig', component: UserRegistrationComponent},
  { path: 'home', component:HomeComponent,
  children:[
  

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
