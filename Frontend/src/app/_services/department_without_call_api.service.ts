import { Injectable } from '@angular/core';
import {Department} from "../_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentWithoutCallApiService {
  departments: Department[] = [
    new Department(1, 'Open Source', 25,'mansoura'),
    new Department(2, 'PD', 30,'mansoura'),
    new Department(3, 'Java', 40,'mansoura'),
  ];

  getAllDepartments() {
    return this.departments;
  }

  newDepartment: Department = new Department(0, '', 20, "");
  selectedDepartment: Department = new Department(0, '', 20, "");
  updatedDepartment: Department = new Department(0, '', 20, "");

  addDepartment(newDepartment:Department):void {
    newDepartment.id = this.departments.length + 1;
    this.departments.push({...newDepartment});
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
  constructor() { }
}
