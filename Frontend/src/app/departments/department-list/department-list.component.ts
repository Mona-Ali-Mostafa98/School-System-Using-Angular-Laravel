import { Component, OnInit, OnDestroy } from '@angular/core';
import {DepartmentService} from "../../_services/department.service";
import {Department} from "../../_models/department";
import {DepartmentCreateModelComponent} from "../../departments/department-create-model/department-create-model.component";
import {DepartmentShowModelComponent} from "../../departments/department-show-model/department-show-model.component";
import {DepartmentUpdateModelComponent} from "../../departments/department-update-model/department-update-model.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

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
export class DepartmentListComponent implements OnInit, OnDestroy {
  constructor(public departmentService:DepartmentService) {}

  departments: Department[] = [];
  selectedDepartment: Department = new Department(0, '', 20, "");
  updatedDepartment: Department = new Department(0, '', 20, "");
  subscription:Subscription|null = null;

  ngOnInit(): void {
    // departments: Department[] = this.departmentService.getAllDepartments();
    this.subscription = this.departmentService.getAllDepartments().subscribe((data: Department[]) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }

  showDepartment(department: Department) {
    // this.departmentService.showDepartment(department);
    // this.selectedDepartment = this.departmentService.selectedDepartment;
    this.subscription = this.departmentService.showDepartment(department).subscribe((data: Department) => {
        this.selectedDepartment = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }

  updateDepartment(department: Department) {
    // this.departmentService.updateDepartment(department);
    // this.updatedDepartment = this.departmentService.updatedDepartment;
    this.subscription = this.departmentService.updateDepartment(department).subscribe((
      data: Department) => {
        this.updatedDepartment = data;
      },
      (error) => {
        console.error('Error fetching department:', error);
      }
    );
  }

  deleteDepartment(departmentId: number) {
    // this.departmentService.deleteDepartment(departmentId);
    this.subscription = this.departmentService.deleteDepartment(departmentId).subscribe(
      (data:Department) => {
        console.log('Department deleted successfully');
        const index = this.departments.findIndex(
          (department) => department.id === departmentId
        );
        if (index !== -1) {
          this.departments.splice(index, 1);
        }
      },
      (error) => {
        console.error('Error fetching department:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
