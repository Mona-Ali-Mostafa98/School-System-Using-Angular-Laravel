import {Component, Input} from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";

@Component({
  selector: 'app-department-show-model',
  standalone: true,
  imports: [],
  templateUrl: './department-show-model.component.html',
})
export class DepartmentShowModelComponent {
  constructor(public departmentService: DepartmentService) {}

  @Input() selectedDepartment: Department = new Department(0, '', 20, "");

  }
