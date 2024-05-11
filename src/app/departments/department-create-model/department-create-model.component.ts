import { Component } from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-department-create-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-create-model.component.html',
})
export class DepartmentCreateModelComponent {
  constructor(public  departmentService:DepartmentService) {}
  newDepartment: Department = new Department(0, '', 20);
  addDepartment(department:Department){
    this.departmentService.addDepartment(this.newDepartment)
    this.newDepartment = new Department(0, '', 20);
  }
}
