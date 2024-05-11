import { Component } from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";
import {DepartmentCreateModelComponent} from "../../departments/department-create-model/department-create-model.component";
import {DepartmentShowModelComponent} from "../../departments/department-show-model/department-show-model.component";
import {DepartmentUpdateModelComponent} from "../../departments/department-update-model/department-update-model.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, FormsModule,
    DepartmentCreateModelComponent,
    DepartmentShowModelComponent,
    DepartmentUpdateModelComponent
  ],
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {
  constructor(public departmentService:DepartmentService) {
  }
  departments: Department[] = this.departmentService.getAllDepartments();
  selectedDepartment: Department = new Department(0, '', 20);
  updatedDepartment: Department = new Department(0, '', 20);

  showDepartment(department: Department) {
    this.departmentService.showDepartment(department);
    this.selectedDepartment = this.departmentService.selectedDepartment;
  }

  updateDepartment(department: Department) {
    this.departmentService.updateDepartment(department);
    this.updatedDepartment = this.departmentService.updatedDepartment;
  }

  deleteDepartment(departmentId: number) {
    this.departmentService.deleteDepartment(departmentId);
  }
}
