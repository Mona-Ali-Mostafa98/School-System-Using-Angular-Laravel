import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {Department} from "../_models/department";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  departments: Department[] = [
    new Department(1, 'Open Source', 25),
    new Department(2, 'PD', 30),
    new Department(3, 'Java', 40),
  ];

  newDepartment: Department = new Department(0, '', 0);
  selectedDepartment: Department = new Department(0, '', 0);
  updatedDepartment: Department = new Department(0, '', 0);

  addDepartment() {
    this.newDepartment.id = this.departments.length+1;
    this.departments.push({ ...this.newDepartment });
    this.newDepartment = new Department(0, '', 0);
  }

  showDepartment(department: Department) {
    this.selectedDepartment = department;
  }

  updateDepartment(department: Department) {
    this.updatedDepartment = department;
  }

  deleteDepartment(departmentId: number) {
    const index = this.departments.findIndex(
      (department) => department.id === departmentId
    );
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  saveUpdatedDepartment() {
    const index = this.departments.findIndex(
      (department) => department.id === this.selectedDepartment.id
    );

    if (index !== -1) {
      this.departments[index] = { ...this.selectedDepartment };
    }
  }
}

