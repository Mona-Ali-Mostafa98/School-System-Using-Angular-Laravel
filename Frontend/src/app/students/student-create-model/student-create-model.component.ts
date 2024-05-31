import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../_services/student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-student-create-model',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './student-create-model.component.html',
  styleUrls: []
})


export class StudentCreateModelComponent {
  constructor(public  studentService:StudentService) {}
  newStudent: Student = new Student(0, '', 20, '');
  addStudent(student:Student){
    this.studentService.addStudent(this.newStudent)
    this.newStudent = new Student(0, '', 20, '');
  }
}
