import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {StudentService} from "../../_services/student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-student-update-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-update-model.component.html',
})
export class StudentUpdateModelComponent {
  constructor(public  studentService:StudentService) {}
  @Input() updatedStudent: Student = new Student(0, '', 20, '');

  saveUpdatedStudent(){ this.studentService.saveUpdatedStudent()}
}
