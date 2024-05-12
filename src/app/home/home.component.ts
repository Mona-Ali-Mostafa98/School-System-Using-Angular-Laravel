import {Component, Input} from '@angular/core';
import {DepartmentService} from "../_services/department.service";
import {StudentService} from "../_services/student.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() childMessage="Hi from child component";

  constructor(public departmentService:DepartmentService, public studentService:StudentService) {}

  studentsCount: number = this.departmentService.getAllDepartments().length;
  departmentsCount: number = this.studentService.getAllStudents().length;
}
