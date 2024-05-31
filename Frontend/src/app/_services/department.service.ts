import { Injectable } from '@angular/core';
import {Department} from "../_models/department";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(public http:HttpClient) { }

  private baseUrl = "http://127.0.0.1:8000/departments/"

  getAllDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl); // Department[] cast as array of department
  }

  addDepartment(newDepartment:Department) {
    return this.http.post<Department>(this.baseUrl, newDepartment);
  }

  showDepartment(department: Department) {
    return this.http.get<Department>(this.baseUrl+department.id);
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete<Department>(this.baseUrl + departmentId);
  }

  updateDepartment(updatedDepartment: Department) {
    return this.http.get<Department>(this.baseUrl + updatedDepartment.id);
  }

  saveUpdatedDepartment(updatedDepartment: Department) {
    return this.http.put<Department>(this.baseUrl + updatedDepartment.id, updatedDepartment);
  }
}
