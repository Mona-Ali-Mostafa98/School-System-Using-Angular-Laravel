import {Component, Input} from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-department-update-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-update-model.component.html',
})
export class DepartmentUpdateModelComponent {
  constructor(public  departmentService:DepartmentService) {}
  @Input() updatedDepartment: Department = new Department(0, '', 20, "");
  subscription:Subscription|null = null;
  @Input() departments: Department[] = [];

  // saveUpdatedDepartment(){ this.departmentService.saveUpdatedDepartment()}

  saveUpdatedDepartment(department:Department) {
    this.subscription = this.departmentService.saveUpdatedDepartment(this.updatedDepartment).subscribe((
      data: any) => {
        this.updatedDepartment = data.department;
        console.log(this.departments, this.updatedDepartment)
        const index = this.departments.findIndex(
          (department) => department.id === data.department.id
        );

        if (index !== -1) {
          this.departments[index] = { ...data.department };
        }
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }
}
