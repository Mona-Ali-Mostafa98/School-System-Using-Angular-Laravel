import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import {DepartmentComponent} from "./department/department.component";
import {StudentListComponent} from "./students/student-list/student-list.component";
import {DepartmentListComponent} from "./departments/department-list/department-list.component";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from "./core/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, HomeComponent, DepartmentComponent,
     HomeComponent, StudentListComponent, DepartmentListComponent, NavbarComponent, FooterComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'School';
}
