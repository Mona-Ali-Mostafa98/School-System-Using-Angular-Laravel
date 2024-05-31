import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // Correct import for Router
import { OnDestroy } from '@angular/core'; // Import OnDestroy for lifecycle hook

@Component({
  selector: 'app-department-create-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-create-model.component.html',
})
export class DepartmentCreateModelComponent implements OnDestroy { // Implement OnDestroy interface
  constructor(public departmentService: DepartmentService, public router: Router) {} // Corrected import for Router

  newDepartment: Department = new Department(0, '', 20, '');
  subscription: Subscription | null = null;
  @Input() departments: Department[] = [];


  addDepartment(department: Department) {
    this.subscription = this.departmentService.addDepartment(department).subscribe(
      (data: any) => {
        console.log('Department added successfully:', data);
        this.departments.push(data.department); // To Update Departments List
      },
      (error) => {
        console.error('Error adding department:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
