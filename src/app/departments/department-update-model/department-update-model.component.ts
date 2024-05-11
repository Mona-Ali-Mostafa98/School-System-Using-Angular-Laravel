import {Component, Input} from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-department-update-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-update-model.component.html',
})
export class DepartmentUpdateModelComponent {
  constructor(public  departmentService:DepartmentService) {}
  @Input() updatedDepartment: Department = new Department(0, '', 20);

  saveUpdatedDepartment(){ this.departmentService.saveUpdatedDepartment()}
}
