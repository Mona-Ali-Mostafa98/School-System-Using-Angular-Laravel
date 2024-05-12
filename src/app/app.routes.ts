import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentListComponent} from "./students/student-list/student-list.component";
import {DepartmentComponent} from "./department/department.component";
import {DepartmentListComponent} from "./departments/department-list/department-list.component";
import {authGuard} from "./guards/auth.guard";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {LoginComponent} from "./core/login/login.component";
import {ProfileComponent} from "./core/profile/profile.component";

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"students",
    component:StudentListComponent,
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate: [authGuard]
  },
  {
    path:"departments",
    component:DepartmentListComponent,
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"**",
    component:NotFoundComponent,
  },

];
