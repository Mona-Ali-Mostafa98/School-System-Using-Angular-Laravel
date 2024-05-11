import { Component } from '@angular/core';
import { StudentService } from "../../_services/student.service";
import { Student } from "../../_models/student";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {StudentCreateModelComponent} from "../student-create-model/student-create-model.component";
import {StudentShowModelComponent} from "../student-show-model/student-show-model.component";
import {StudentUpdateModelComponent} from "../student-update-model/student-update-model.component";
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentCreateModelComponent, StudentShowModelComponent, StudentUpdateModelComponent],
  templateUrl: './student-list.component.html',
  styleUrls: []
})
export class StudentListComponent {
  constructor(public studentService: StudentService) {}
  students: Student[] = this.studentService.getAllStudents();
  selectedStudent: Student = new Student(0, '', 20, '');
  updatedStudent: Student = new Student(0, '', 20, '');

  showStudent(student: Student) {
    this.studentService.showStudent(student);
    this.selectedStudent = this.studentService.selectedStudent;
  }

  updateStudent(student: Student) {
    this.studentService.updateStudent(student);
    this.updatedStudent = this.studentService.updatedStudent;
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId);
  }
}
